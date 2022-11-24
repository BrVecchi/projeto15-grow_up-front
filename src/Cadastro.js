import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
export default function Cadastro(){
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] =  useState("")
    

    function fazerCadastro(e){
        e.preventDefault()

        const body = {
            email: email,
            name: name,
            password: password
        } 
        
        
        const promise = axios.post('https://growup-api.onrender.com/sign-up', body)
        
        promise.then((res) => {
          console.log(res.data)
        })
        promise.catch((err) => {
            alert(err.response.data.message)
           
        })
    }

    return(
        <>
        <form onSubmit={fazerCadastro}>
        <Container>
        <input 
        required
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="nome"></input>
        <input
        required
        value={email}
        onChange={e => setEmail(e.target.value)} 
        placeholder="e-mail"></input>
        <input 
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="senha"></input>
        <button type="submit">Cadastrar</button>
        <p>Já tem uma conta? Faça login!</p>
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
