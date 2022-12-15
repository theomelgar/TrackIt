import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import { ImageProvider } from "../context/image"

export default function TrackMain() {

    return (
        <BrowserRouter>
            <ImageProvider>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" element={<Today/>}/>
                    <Route path="/historico" element={<History/>}/>
                </Routes>
            </ImageProvider>
        </BrowserRouter>
    )
}