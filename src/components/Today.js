import Menu from "./Menu";
import NavBar from "./NavBar"
import { StyleHabits } from "./StyleHabits";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ListContext } from "../context/list";
import { api } from "../services/auth";
import CardToday from "./CardToday"

export default function Today() {
    const dayjs = require('dayjs')
    const { week,setPercentage,UserData } = useContext(ListContext)
    const token = UserData.token
    const [today, setToday] = useState([])
    //import dayjs from 'dayjs' // ES 2015
    useEffect(() => {
        api.get(`habits/today`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setToday(res.data)
                calcPercentage(res.data)
            })
            .catch(err => console.log(err.response.data.message))
    }, [token])
    const calcPercentage = (data) => {
        const habitsDone = data.filter((t) => t.done);
        const percentageHabitsCompleted = (habitsDone.length / data.length) * 100;
        setPercentage(percentageHabitsCompleted.toFixed());
      };
    return (
        <StyleHabits>
            <NavBar />
            <Date>
                <p>{week[dayjs().day()].name
                }, {dayjs().date()}/{dayjs().month() + 1}</p>
            </Date>
            {today.length===0 && (
                <Alert>
                    <p>Nenhum hábito concluído ainda</p>
                </Alert>
            )}
            {today.map((activity) => <CardToday token={token} activity={activity} />)}
            
            <Menu />
        </StyleHabits>
    )
}
const Date = styled.div`
    width: 90%;
    height: 70px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    font-size: 22.976px;
    line-height: 29px;  
    color: #126BA5; 
`

const Alert = styled.div`
    width: 90%;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`