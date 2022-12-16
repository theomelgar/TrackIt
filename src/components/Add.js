import { useContext, useState } from "react"
import styled from "styled-components"
import { ListContext } from "../context/list";

export default function Add() {
    const [isActive, setIsActive] = useState(false);
    const {week} = useContext(ListContext)
    const [habit, setHabit] = useState()
    function add(e) {
        e.preventDefault()
    }
    function cancelar() {
        return;
    }
    function handleClick(l) {
        setIsActive(!isActive)
    }
    return (
        <StyleAdd>
            <form onSubmit={add}>
                <input
                    type="text"
                    placeholder="nome do hábito"
                    onChange={(e) => setHabit(e.target.value)}
                    value={habit}
                />
                <Days>
                {week.map((l)=>
                
                    <Day key={l}
                    style={{
                    background: isActive ? '#CFCFCF' : '#ffffff',
                    color: isActive ? 'white' : '#DBDBDB',
                    border: isActive ? '1px solid #CFCFCF' : '1px solid #D5D5D5',
                }}
                    onClick={()=>handleClick(l)}
                >{l[0]}</Day>
                )}
                </Days>
                <Salvar type='submit'>Salvar</Salvar>
                <Cancelar onClick={cancelar}>Cancelar</Cancelar>
            </form>
        </StyleAdd>
    )
}

const StyleAdd = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: auto 12px;
        gap: 7px;
        input{
            margin-top: 10px;
            width: 303px;
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
`
const Day = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    cursor: pointer;
`