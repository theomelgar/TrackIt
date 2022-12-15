import styled from "styled-components"
import { useContext } from "react"
import { ImageContext } from "../context/image"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
export default function Menu() {
    // const {} = useContext()
    const percentage = 66;
    return (
        <StyleMenu>
            <div style={{ width: 91, height: 91 }}>
                <CircularProgressbar
                    value={percentage}
                    text="Hoje"
                    background={true}
                    backgroundPadding={7}
                    styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                            // Path color
                            stroke: `white`,
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',
                            // Customize transition animation
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            // Rotate the path
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                            // Trail color
                            stroke: '#52B6FF',
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',
                            // Rotate the trail
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        // Customize the text
                        text: {
                            // Text color
                            fill: 'white',
                            // Text size
                            fontSize: '17.976px',
                        },
                        // Customize background - only used when the `background` prop is true
                        background: {
                            fill: '#52B6FF',
                        },
                    }}
                />
            </div>
            <p>Hábitos</p>
            <p>Histórico</p>
        </StyleMenu>
    )
}
const StyleMenu = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    background-color: #FFFFFF;
    p{
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    div{
        position: absolute;
        bottom: 20px;
        left: auto;
    }
`