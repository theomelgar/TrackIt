import NavBar from "../NavBar";
import { StyleHabits } from "../StyleHabits";
import Habit from "../Habit";
import styled from "styled-components";
import Menu from "../Menu";
import Add from "../Add";
import { useContext, useEffect, useState } from "react";
import { InfoContext } from "../../context/info";
import { api } from "../../services/auth";

export default function Habits() {
    const [start, setStart] = useState(false)
    const { UserData } = useContext(InfoContext);
    const token = UserData.token
    const [list, setList] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        api.get(`habits`,
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .then(res => {
                setList(res.data)
            })
            .catch(err => alert(err.response.data.message))
    }, [update, token])
    return (
        <StyleHabits>
            <NavBar />
            <UserHabits>
                <p>Meus hábitos</p>
                <div data-test="habit-create-btn" onClick={() => setStart(!start)}>+</div>
            </UserHabits>
            {start && <Add token={token} setStart={setStart} UserData={UserData} setUpdate={setUpdate}></Add>}
            {list.length === 0 && (
                <Alert>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Alert>
            )}
            <HabitList>
                {list.map((activity) => <Habit setUpdate={setUpdate} key={activity.id} token={token} activity={activity} />)}
            </HabitList>

            <Menu />
        </StyleHabits>
    )
}

const Alert = styled.div`
    width: 90%;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`
const UserHabits = styled.div`
    width: 90%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22.976px;
    line-height: 29px;  
    margin-top: 80px;
    color: #126BA5; 
    div{        
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        text-align: center;
        color: white;
        font-size: 26.976px;
        line-height: 34px;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
            opacity: 0.7;
        }
    }
`
const HabitList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 100px;
`