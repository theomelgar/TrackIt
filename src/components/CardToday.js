import { useState } from "react";
import styled from "styled-components";
import { api } from "../services/auth";
import Loading from "./Loading";

export default function CardToday({ activity, token, setUpdate }) {
    const [click, setClick] = useState(true)
    const { id, name, currentSequence, highestSequence, done } = activity
    const [load, setLoad] = useState(
        <ion-icon name="checkmark-sharp"></ion-icon>
    )
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function check() {
        setLoad(Loading)
        api
            .post(`habits/${id}/check`, {}, config)
            .then(() => {
                setClick(!click)
                setUpdate(up => !up)
                setLoad(<ion-icon name="checkmark-sharp"></ion-icon>)
            }
            )
            .catch(err => {alert(err.response.data.message)
                setLoad(<ion-icon name="checkmark-sharp"></ion-icon>)
            })
    }
    function unCheck() {
        setLoad(Loading)
        api
            .post(`habits/${id}/uncheck`, {}, config)
            .then(() => {
                setClick(!click)
                setUpdate(up => !up)
                setLoad(<ion-icon name="checkmark-sharp"></ion-icon>)
            }
            )
            .catch(err => {alert(err.response.data.message)
                setLoad(<ion-icon name="checkmark-sharp"></ion-icon>)
            })
    }

    return (
        <StyleToday data-test="today-habit-container">
            <p data-test="today-habit-name">{name}</p>

            <Streak color={currentSequence === highestSequence ? "#8FC549" : "#666666"}>
                <p data-test="today-habit-sequence" >Sequência atual:<span>{currentSequence} {currentSequence > 1 ? "dias" : "dia"}</span> </p>
                <p data-test="today-habit-record">Seu recorde:<span>{highestSequence} {currentSequence > 1 ? "dias" : "dia"}</span> </p>
            </Streak>
            {!done ? (
                <Check data-test="today-habit-check-btn" onClick={check} cor="#EBEBEB">
                    {load}
                </Check>) :
                (<Check data-test="today-habit-check-btn" onClick={unCheck} cor="#8FC549">
                    {load}
                </Check>)}
        </StyleToday>
    )
}

const StyleToday = styled.div`
    height: 94px;
    width: 90%;
    background: #FFFFFF;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    p{
        margin-left:20px;
    }
`
const Streak = styled.div`
    font-size: 12.976px;
    line-height: 16px;
    span{
        color: ${props => props.color}}
`
const Check = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    right: 10px;
    top: 10px;
    font-size: 60px;
    text-align: center;
    color: white;
    background: ${props => props.cor};
    border: 1px solid #E7E7E7;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        opacity: 0.7;
    }
`