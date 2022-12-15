import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Habits from "./Habits";
import { ImageProvider } from "../context/image"

export default function TrackMain() {

    return (
        <BrowserRouter>
            <ImageProvider>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" />
                    <Route path="/historico" />
                </Routes>
            </ImageProvider>
        </BrowserRouter>
    )
}