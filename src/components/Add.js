import { useContext, useState } from "react"
import styled from "styled-components"
import { ListContext } from "../context/list";
import Day from "./Day";
import { api } from "../services/auth";

export default function Add({ setStart, token, setUpdate }) {
    const { week } = useContext(ListContext)
    const [habit, setHabit] = useState()
    const [selectedDays, setSelectedDays] = useState([])
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function handleDay(day) {
        const isSelected = selectedDays.some((s) => s.id === day.id)
        console.log("a")
        if (isSelected) {
            const newList = selectedDays.filter((s) => s.id !== day.id)
            setSelectedDays(newList)

        } else {
            setSelectedDays([...selectedDays, day])
        }
    }

    function add() {
        const body = {
            name: habit,
            days: selectedDays.map((day) => day.id)
        }
        console.log(body)
        if (selectedDays.length === 0) {
            alert("Selecione pelo menos um dia")
            return
        }
        else if (habit === undefined) {
            alert("Escolha um hábito")
            return
        }
        else {
            api.post(`habits`, body, config)
                .then(res => {
                    console.log(`add ${res}`)
                    setStart(false)
                    setUpdate(up=>!up)
                })
                .catch(err => console.log(err.response.data))
        }
    }

    return (
        <StyleAdd>
            <input
                type="text"
                placeholder="nome do hábito"
                onChange={(e) => setHabit(e.target.value)}
                value={habit}
            />
            <Days>
                {week.map((day) => (
                    <Day
                        key={day.id}
                        day={day}
                        handleDay={handleDay}
                        isSelected={selectedDays.some((s) => s.id === day.id)}
                    />
                ))}
            </Days>
            <Salvar onClick={add}>Salvar</Salvar>
            <Cancelar onClick={() => setStart(false)}>Cancelar</Cancelar>
        </StyleAdd>
    )
}

const StyleAdd = styled.div`
    width: 90%;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
    input{
        margin: 10px 6px;
        width: 90%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        &::placeholder{
            color: #DBDBDB;
        }
        &:disabled{
            color: #AFAFAF;
        }
    }
`
const Salvar = styled.button`
    position: absolute;
    width: 84px;
    height: 35px;
    right: 20px;
    bottom: 20px;
    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;
    &:hover{
        cursor: pointer;
    }
`

const Cancelar = styled.div`
    position: absolute;
    width: 69px;
    height: 20px;
    right: 120px;
    bottom: 25px;
    text-decoration: underline;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
`
const Days = styled.div`
    margin-left: 10px ;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
`
