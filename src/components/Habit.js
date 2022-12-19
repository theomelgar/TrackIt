import styled from "styled-components"
import { useContext, useState } from "react"
import { ListContext } from "../context/list"
import { dayColors } from "../constants/colors"
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { api } from "../services/auth";

export default function Habit({ activity,token }) {
    const { week } = useContext(ListContext)
    let status = 'available'

    const deleteHabit = () => {
        confirmAlert({
          title: "Reflexão",
          message: "Isso iria deixar você orgulhoso amanhâ?",
          buttons: [
            {
              label: "Sim",
              onClick: () => {
                api
                  .delete(`habits/${activity.id}`, { headers: { Authorization: `Bearer ${token}` } })
                  .then(alert("Persista!"))
                  .catch((err) => console.log(err));
              },
            },
            {
              label: "Não",
            },
          ],
        });
      };

    return (
        <StyleHabit>
            <p>{activity.name}</p>
            <div onClick={()=>deleteHabit}>
                <ion-icon name="trash-outline"></ion-icon>
            </div>
            <Days>
                {week.map((d, i) => (
                    <Day key={i} status={
                        activity.days.includes(i) ?
                            (status = 'selected')
                            : (status = "available")}>
                        {d.name[0]}
                    </Day>
                ))}
            </Days>
        </StyleHabit>
    )

}
const Days = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    position: absolute;
    bottom: 10px;
    left: 15px;
    
`
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
    position: relative;
    p{
        padding: 10px 20px;
    }
    ion-icon{
        padding: 7px 10px;
    }
`
const Day = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
    text-align: center;
    border: 1px solid ${props => dayColors[props.status].border};
    background-color: ${props => dayColors[props.status].background};
    color: ${props => dayColors[props.status].color};
`