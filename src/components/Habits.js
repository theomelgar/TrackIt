import NavBar from "./NavBar";
import UserHabits from "./UserHabits";
import { StyleHabits } from "./StyleHabits";
import Habit from "./Habit";
import styled from "styled-components";
import { useState } from "react";
import Menu from "./Menu";
export default function Habits() {
    const [empty, setEmpty] = useState(true)
    return (
        <StyleHabits>
            <NavBar />
            <UserHabits/>
            <Habit setEmpty={setEmpty}>
            </Habit>
            {empty && (
                <Alert>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Alert>
            )}
            <Menu></Menu>
        </StyleHabits>
    )
}
const Alert = styled.div`
    width: 90%;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`