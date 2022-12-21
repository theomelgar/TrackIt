import styled from "styled-components"
import { useContext } from "react"
import { ListContext } from "../context/list";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../context/info";

export default function NavBar() {
    const { setUserData } = useContext(ListContext);
    const { UserData } = useContext(InfoContext);
    const navigate = useNavigate()
    const signout = () => {
        localStorage.clear()
        setUserData({})
        navigate('/')
    }
    return (
        <NavStyle data-test="header">
            <h1>TrackIt</h1>
            <img src={UserData.image} alt='icone' />
            <Sair onClick={signout}>
            <ion-icon name="log-out-outline"/>
                <p>Sair</p>
            </Sair>
        </NavStyle>
    )
}
const NavStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 2;
    h1{
        position: absolute;
        width: 97px;
        height: 49px;
        left: 25px;
        top: 10px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        position: absolute;
        width: 51px;
        height: 51px;
        right: 15px;
        top: 10%;
        border-radius: 98.5px;
    }
`
const Sair = styled.div`
    cursor: pointer;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: aliceblue;
    border-radius: 95px;
    text-align: center;
    position: absolute;
    right: 100px;
    top: 35%;
    color: #126BA5;
    &:hover{
            transform: scale(1.1);
            opacity: 0.7;
        }
`