import Menu from "./Menu";
import NavBar from "./NavBar"
import UserHabits from "./UserHabits";
import { StyleHabits } from "./StyleHabits";
import { useState } from "react";
import styled from "styled-components";

export default function Today(){
    const [empty,setEmpty] = useState(true)
    return(
        <StyleHabits>
            <NavBar />
            <Date>
                <p>Quinta, 15/12</p>
            </Date>
            {empty && (
                <Alert>
                    <p>Nenhum hábito concluído ainda</p>
                </Alert>
            )}
            <Habit setEmpty={setEmpty}>
            </Habit>
            <Menu/>
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