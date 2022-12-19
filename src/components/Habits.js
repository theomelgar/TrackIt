import NavBar from "./NavBar";
import { StyleHabits } from "./StyleHabits";
import Habit from "./Habit";
import styled from "styled-components";
import Menu from "./Menu";
import Add from "./Add";
import { useContext, useEffect, useState } from "react";
import { ListContext } from "../context/list";
import { api } from "../services/auth";

export default function Habits() {
    const [start, setStart] = useState(false)
    const { UserData } = useContext(ListContext);
    const token = UserData.token
    const [list, setList] = useState([])
    useEffect(() => {
        api.get(`habits`,
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .then(res => {
                console.log(res.data)
                setList(res.data)
            })
            .catch(err => console.log(err.response.data.message))
    }, [token])

    return (
        <StyleHabits>
            <NavBar />
            <UserHabits>
                <p>Meus hábitos</p>
                <div onClick={() => setStart(!start)}>+</div>
            </UserHabits>
            {start && <Add token={token} setStart={setStart} UserData={UserData}></Add>}
            {list.map((activity) => <Habit token={token} activity={activity} />)}
            {list.length===0 && (
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
const UserHabits = styled.div`
    width: 90%;
    height: 70px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22.976px;
    line-height: 29px;  
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
    }
`