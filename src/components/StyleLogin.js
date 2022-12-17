import styled from "styled-components"
const LogInStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 160px auto;
    gap: 10px;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7px;
        input{
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
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 303px;
            height: 45px;
            background: #52B6FF;
            border-radius: 4.63636px;
            font-size: 20.976px;
            line-height: 26px;
            text-align: center;
            color: #FFFFFF;
            border: none;
            &:hover{
                cursor: pointer;
            }
        }
    }
    p{
        
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`
export default LogInStyle