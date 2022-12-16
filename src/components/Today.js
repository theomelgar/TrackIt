import Menu from "./Menu";
import NavBar from "./NavBar"
import { StyleHabits } from "./StyleHabits";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ListContext } from "../context/list";

export default function Today() {
    const [empty, setEmpty] = useState(true)
    const dayjs = require('dayjs')
    const {week} = useContext(ListContext)
    //import dayjs from 'dayjs' // ES 2015
    return (
        <StyleHabits>
            <NavBar />
            <Date>
                <p>{week[dayjs().day()]
                }, {dayjs().date()}/{dayjs().month()+1}</p>
            </Date>
            {empty && (
                <Alert>
                    <p>Nenhum hábito concluído ainda</p>
                </Alert>
            )}
            <Habit setEmpty={setEmpty}>
            </Habit>
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

const Habit = styled.div`
`
const Alert = styled.div`
    width: 90%;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`