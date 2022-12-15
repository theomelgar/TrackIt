import StyleLogin from "./StyleLogin"
import logo from "../assets/img/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../constants/urls"
import axios from "axios"
import { useState } from "react"

export default function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [photo, setPhoto] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    function send(e) {
        e.preventDefault(); // impede o redirecionamento

        const Login = {
            email: email,
            name: name,
            image: photo,
            password: password
        };
        axios
            .post(
                `${BASE_URL}auth/sign-up`,
                Login
            )
            .then(() => navigate("/"))
            .catch((error) => alert(error.response.data.message));
        console.log(Login)
    }
    return (
        <StyleLogin>
            <img src={logo} alt="TrackIt" />
            <form onSubmit={send}>
                <input type="email" id="emal" placeholder="email"
                    value={email} required onChange={e => setEmail(e.target.value)} />
                <input type="password" id="password" placeholder="senha"
                    value={password} required onChange={e => setPassword(e.target.value)} />
                <input type="text" id="name" placeholder="nome"
                    value={name} required onChange={e => setName(e.target.value)} />
                <input type="url" id="photo" placeholder="foto"
                    value={photo} required onChange={e => setPhoto(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </StyleLogin>
    )
}
