import styled from "styled-components"
export default function Topo() {
    return (
        <>
            <Container>
                <Login>Bem vindo visitante, cadastre-se ou faça seu login</Login>
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