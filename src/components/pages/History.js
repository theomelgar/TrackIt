import Menu from "../Menu";
import NavBar from "../NavBar"
import { StyleHabits } from "../StyleHabits";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ListContext } from "../../context/list";
import { api } from "../../services/auth"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function History() {
    const dayjs = require('dayjs')
    const [empty, setEmpty] = useState(true)
    const { UserData } = useContext(ListContext)
    const [historyData, setHistoryData] = useState([])
    const token = UserData.token
    const [value, onChange] = useState(new Date());
    const [visible, setVisible] = useState(false)
    const [result, setResult] = useState()
    useEffect(() => {
        api
            .get("habits/history/daily", { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                setHistoryData(res.data)
                setEmpty(false)
            })
            .catch((err) => console.log(err.response.data.message))
    }, [])

    function appear(value) {
        const dateFormat = dayjs(value).locale("pt-br").format("DD/MM/YYYY");
        (historyData.map((h) =>
            (h.day === dateFormat) && (setVisible(!visible))
        ))
    }

    function handleClickDay(value) {
        const dateFormat = dayjs(value).locale("pt-br").format("DD/MM/YYYY");
        (historyData.map((h) =>
            (h.day === dateFormat) && (
                setResult(h.habits.map((l) =>
                    `${l.name}: ${l.done === true ? "Feito" : "Não Feito"}`

                )))
        ))

    }
    const formatDate = (date) => {
        const dateFormat = dayjs(date).locale("pt-br").format("DD/MM/YYYY");
        const day = dateFormat.split("/")[0];
        for (let i = 0; i < historyData.length; i++) {
            const item = historyData[i];
            if (dateFormat === item.day) {
                const habitsDone = item.habits.filter((h) => h.done);
                const allTasksDone = habitsDone.length === item.habits.length;
                if (allTasksDone) {
                    return <Good>{day}</Good>;
                }
                return <Bad>{day}</Bad>;
            }
        }

        return day;
    }
    console.log(result)
    return (
        <StyleHabits>
            <NavBar />
            <Title><p>Histórico</p></Title>
            {empty ? (
                <Alert>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Alert>
            ) : (
                <StyleCalendar>
                    <Calendar
                        locale="pt-BR"
                        calendarType="US"
                        value={value}
                        onClickDay={(value) => {
                            handleClickDay(value)
                            appear(value)
                        }}
                        formatDay={(locale, date) => formatDate(date)} />
                    <Menu />
                    {!visible && 
                        <List>
                            {result.map((l) =>
                                <div>
                                    <p>{l}</p>
                                </div>
                            )}
                            <button onClick={() => setVisible(false)}>x</button>
                        </List>
                    }
                </StyleCalendar>
            )}
        </StyleHabits>
    )
}
const List = styled.div`
    position: absolute;
    width: 100%;
    
    top: 40px;
    left: 0;
    background-color:#087ba8;
    display: flex;
    flex-direction: column;
    justify-content: center;
        align-items: center;
    flex-wrap: wrap;
    text-align: center;
    border-radius:3%;
`
const Title = styled.div`
    width: 90%;
    height: 70px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    font-size: 22.976px;
    line-height: 29px;  
    color: #126BA5; 
`

const StyleCalendar = styled.div`
    width: 90%; 
    position: relative;
    .react-calendar{
        background-color:#a7dae6;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 7px;
        margin-bottom: 100px;
    }
    .react-calendar__tile--now{
        background-color: yellow;
    }
    .react-calendar__month-view__days {
        display: flex;
        background-color: #b4ebf8;
        gap: 8px 0px;
        button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 51px;
        }
    }
    
    .react-calendar__navigation {
        display: flex;
        background-color:#b4ebf8;
        .react-calendar__navigation__label {
        font-weight: bold;
        background-color:#a9dde9;
        }

        .react-calendar__navigation__arrow {
        background-color:#b4ebf8;
        }
    }
`

const Alert = styled.div`
    width: 90%;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`

const Good = styled.div`
    background-color: #5fbb48;
    border-radius: 99px;
    width: 37px;
    height: 37px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Bad = styled.div`
    background-color: #ec3d3d;
    border-radius: 99px;
    width: 37px;
    height: 37px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`