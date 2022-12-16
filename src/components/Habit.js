import { useContext } from "react"
import styled from "styled-components"
import { ListContext } from "../context/list"

export default function Habit(){
    const {setEmpty} = useContext(ListContext)
    return(
        <StyleHabit>
            <p>Terminar o projeto</p>
            <ion-icon name="trash-outline"></ion-icon>
            
        </StyleHabit>
    )
}
const StyleHabit = styled.div`
width: 340px;
height: 91px;
left: 17px;
top: 147px;

background: #FFFFFF;
border-radius: 5px;
`