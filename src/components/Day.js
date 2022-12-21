import { useEffect, useState } from "react"
import styled from "styled-components"
import { dayColors } from "../constants/colors"

export default function Day({ day, handleDay, isSelected }) {
    const [status, setStatus] = useState("available")
    useEffect(() => {
        if (isSelected) {
            setStatus("selected")
        } else if (day.isAvailable) {
            setStatus("available")
        }
    }, [isSelected, day.isAvailable])

    return (
        <DayItem
            data-test="habit-day"
            status={status}
            onClick={() => handleDay(day)}>
            {day.name[0]}
        </DayItem>

    )
}

const DayItem = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    cursor: pointer;
    border: 1px solid ${props => dayColors[props.status].border};
    background-color: ${props => dayColors[props.status].background};
    color: ${props => dayColors[props.status].color};
    &:hover{
        transform: scale(1.1);
        background-color: ${props => [props.status]=="available" ? "#CFCFCF" : "#FFFFFF"};
        color: ${props => [props.status]=="available" ? "#FFFFFF" : "#000000"};
    }
`