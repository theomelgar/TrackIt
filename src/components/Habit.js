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
    width: 90%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    display: flex;
    justify-content: space-between;
    p{
        padding: 10px 20px;
    }
    ion-icon{
        padding: 7px 10px;
    }
`