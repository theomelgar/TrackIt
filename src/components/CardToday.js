import { useState } from "react";
import styled from "styled-components";
import { api } from "../services/auth";

export default function CardToday({ activity, token }) {
    const [click, setClick] = useState(true)
    const [times, setTimes] = useState(0)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function check() {
        api
            .post(`habits/${activity.id}/check`, {}, config)
            .then(() => {
                setClick(!click)
                setTimes(times + 1)
            }
            )
            .catch(err => console.log(err.response.data.message))
    }
    function unCheck() {
        api
            .post(`habits/${activity.id}/uncheck`, {}, config)
            .then(() => {
                setClick(!click)
                setTimes(times - 1)
            }
            )
            .catch(err => console.log(err.response.data.message))
    }
    return (
        <StyleToday>
            <p>{activity.name}</p>
            <Streak>
                <p>Sequência atual:{times}</p>
                <p>Seu recorde:{times}</p>
            </Streak>
            {!activity.done ? (
                <Check onClick={check} cor="#EBEBEB">
                    <ion-icon name="checkmark-sharp"></ion-icon>
                </Check>) :
                (<Check onClick={unCheck} cor="#8FC549">
                    <ion-icon name="checkmark-sharp"></ion-icon>
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
`
const Check = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 69px;
    height: 69px;
    right: 10px;
    top: 10px;
    font-size: 60px;
    text-align: center;
    color: white;
    background: ${props => props.cor};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`