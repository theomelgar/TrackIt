import styled from "styled-components"

export default function UserHabits() {
    return (
        <StyleUserHabits>
            <p>Meus Hábitos</p>
            <div>+</div>
        </StyleUserHabits>
    )
}
const StyleUserHabits = styled.div`
    width: 90%;
    height: 70px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
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
