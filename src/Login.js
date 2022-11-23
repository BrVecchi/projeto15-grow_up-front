import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    function fazerLogin(e) {
        e.preventDefault()

        const body = {
            email: email,
            senha: senha
        }
        const promise = axios.post('asdijasiodja', body)
        promise.then((res) => {
            console.log(res.data)

        })
        promise.catch((err) => {
            alert(err.response.data.message)

        })
    }
    return (
        <><form onSubmit={fazerLogin}>
            <Container>
                <Logo>GrowUp</Logo>
                <input
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e-mail"></input>
                <input
                    required
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="senha"></input>
                <button type="submit">Entrar</button>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Container>
        </form>
        </>
    )
}
const Container = styled.div`
width: 100wh;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
input{
    margin-top: 6px;
    width: 303px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
}
button{
    margin-top: 6px;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    border: 1px solid #52B6FF;
    color: white;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Lexend Deca', sans-serif;
}
p{
    margin-top: 25px;
    text-decoration: underline;
    font-weight: 400;
    font-size: 14px;
    color:#52B6FF;
    font-family: 'Lexend Deca', sans-serif;
}
`

const Logo = styled.div`
font-size: 25px;
margin-bottom: 20px;

`