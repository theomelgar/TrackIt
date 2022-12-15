import styled from "styled-components"
import { useContext } from "react"
import { ImageContext } from "../context/image"
export default function NavBar(){
    const {info} = useContext(ImageContext)
    return(
        <NavStyle>
            <h1>TrackIt</h1>
            <img src={info.image} alt='icone'/>
        </NavStyle>
    )
}
const NavStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    background: #126BA5;
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
        right: 25px;
        top: 9px;
        border-radius: 98.5px;
    }
`