import Menu from "../Menu";
import NavBar from "../NavBar"
import { StyleHabits } from "../StyleHabits";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ListContext } from "../../context/list";
import { InfoContext } from "../../context/info";
import { api } from "../../services/auth";
import CardToday from "../CardToday"

export default function Today() {
    const dayjs = require('dayjs')
    const {UserData} = useContext(InfoContext)
    const { week, setPercentage, percentage } = useContext(ListContext)
    const [update, setUpdate] = useState(true)
    const token = UserData.token
    const [today, setToday] = useState([])
    
    useEffect(() => {
        const calcPercentage = (data) => {
            const habitsDone = data.filter((t) => t.done);
            const percentageHabitsCompleted = (habitsDone.length / data.length) * 100;
            setPercentage(percentageHabitsCompleted.toFixed());
        };
        api.get(`habits/today`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setToday(res.data)
                calcPercentage(res.data)
            })
            .catch(err => alert(err.response.data.message))
    }, [update,token,setPercentage])

    
    return (
        <StyleHabits>
            <NavBar />
            <Date>
                <p data-test="today">{week[dayjs().day()].name
                }, {dayjs().date()}/{dayjs().month() + 1}</p>
            </Date>
            <Alert>
                <AlertText data-test="today-counter" switch={percentage < 1 ? false : true}>
                    {percentage < 1 ? "Nenhum hábito concluído ainda" : `${percentage}% dos hábitos concluídos`}
                </AlertText>
            </Alert>
            <Cards>
                {today.map((activity) => <CardToday key={activity.id} token={token} activity={activity} setUpdate={setUpdate} />)}
            </Cards>
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
const AlertText = styled.p`
  font-size: 18px;
    line-height: 22px;
    color: ${(props) => (props.switch ? "#8FC549" : "#bababa")};
`
const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 80px;
`