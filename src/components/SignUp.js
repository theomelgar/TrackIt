import StyleLogin from "./StyleLogin"
import logo from "../assets/img/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../services/auth"
import { useState } from "react"
import Loading from "./Loading"

export default function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [photo, setPhoto] = useState()
    const [password, setPassword] = useState()
    const [load, setLoad] = useState("Cadastrar")
    const [off, setOff] = useState(false)
    const navigate = useNavigate()
    function send(e) {
        e.preventDefault(); // impede o redirecionamento

        const Login = {
            email: email,
            name: name,
            image: photo,
            password: password
        };
        api
            .post(
                `auth/sign-up`,
                Login
            )
            .then(() => {
                navigate("/")
                setLoad("Cadastrar")
                setOff(false)
            })
            .catch((error) => {
                alert(error.response.data.message)
                setLoad("Cadastrar")
                setOff(false)
            });
        console.log(Login)
    }
    return (
        <StyleLogin>
            <img src={logo} alt="TrackIt" />
            <form onSubmit={send}>
                <input
                    type="email"
                    id="emal"
                    disabled={off}
                    placeholder="email"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    disabled={off}
                    placeholder="senha"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    id="name"
                    disabled={off}
                    placeholder="nome"
                    value={name}
                    required
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="url"
                    id="photo"
                    disabled={off}
                    placeholder="foto"
                    value={photo}
                    required
                    onChange={e => setPhoto(e.target.value)}
                />
                <button type="submit" onClick={() => {
                    setLoad(Loading)
                    setOff(true)
                }}>{load}</button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </StyleLogin>
    )
}
