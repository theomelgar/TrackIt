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
    const { week, setPercentage, UserData, percentage } = useContext(ListContext)
    const [update, setUpdate] = useState(true)
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
    }, [update])
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
            <Alert>
                <AlertText switch={percentage < 1 ? false : true}>
                    {percentage < 1 ? "Nenhum hábito concluído ainda" : `${percentage}% dos hábitos concluídos`}
                </AlertText>
            </Alert>
            {today.map((activity) => <CardToday key={activity.id} token={token} activity={activity} setUpdate={setUpdate} />)}

            <Menu />
        </StyleHabits>
    )
}
const Date = styled.div`
    width: 90%;
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
export const AlertText = styled.p`
  font-size: 18px;
    line-height: 22px;
    color: ${(props) => (props.switch ? "#8FC549" : "#bababa")};
`