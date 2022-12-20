import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Habits from "./pages/Habits";
import Today from "./pages/Today";
import History from "./pages/History";
import { ListProvider } from "../context/list";
import { InfoProvider } from "../context/info";

export default function TrackMain() {

    return (
        <BrowserRouter>
            <InfoProvider>
                <ListProvider>
                    <Routes>
                        <Route path="/" element={<LogIn />} />
                        <Route path="/cadastro" element={<SignUp />} />
                        <Route path="/habitos" element={<Habits />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/historico" element={<History />} />
                    </Routes>
                </ListProvider>
            </InfoProvider>
        </BrowserRouter>
    )
}