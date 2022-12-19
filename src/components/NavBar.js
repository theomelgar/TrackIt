import styled from "styled-components"
import { useContext } from "react"
import { ListContext } from "../context/list";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const { UserData, setUserData } = useContext(ListContext);
    const navigate = useNavigate()
    const signout = () => {
        localStorage.clear()
        setUserData({})
        navigate('/')
    }
    return (
        <NavStyle>
            <h1>TrackIt</h1>
            <img src={UserData.image} alt='icone' />
            <Sair onClick={signout}>
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
    width: 50px;
    font-size: 20px;
    background-color: aliceblue;
    border-radius: 95px;
    text-align: center;
    position: absolute;
    right: 48.5%;
    top: 35%;
    color: #126BA5;
`