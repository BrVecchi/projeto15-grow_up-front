import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
export default function Topo() {
    
    return (
        <>
            <Container>
                <Login>Bem vindo visitante, <Link to="/sign-up">cadastre-se</Link> ou <Link to="/sign-in">faça seu login</Link></Login>
                <Logo>GrowUp</Logo>
                <Carrinho>
                    <img src="./carrinho.png"></img>
                </Carrinho>
            </Container>
            
        </>
    )
}

const Container = styled.div`
width: 100wh;
height: 100px;
display: flex;
align-items: center;
justify-content: space-around;
`
const Logo = styled.div`
font-size: 30px;
font-family: 'Lexend Deca', sans-serif;

`
const Login = styled.div`
width: 135px;
`
const Carrinho = styled.div`
img{
    width: 40px;
    height: 40px;
}
`