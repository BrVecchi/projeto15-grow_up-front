
import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
export default function Produtos() {
    const [produtos, setProdutos] = useState([])
    function listarProdutos() {

        const URL = 'https://growup-api.onrender.com/products'
        const promise = axios.get(URL)

        promise.then((res) => {
            setProdutos(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    }
    useEffect(() => {
        listarProdutos()
    }, [])


    return (
        <>
            <Container>
                {produtos.map((p) => (
                    <Produtcs key={p.id}>
                        <img src={p.image}></img>
                        <h1>{p.name}</h1>
                        <p>{p.description}</p>
                        <p> {p.price} </p>
                        <button>Adicionar ao carrinho</button>
                    </Produtcs>
                ))}

            </Container>
        </>
    )
}
const Container = styled.div`
width: 100wh;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const Produtcs = styled.div`
width: 300px;
height: 400px;
margin-left: 10px;
padding: 10px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
img{
    width: 100px;
    height: 100px;
}

h1{
    font-size: 30px;
    font-family: 'Lexend Deca', sans-serif;
}
p{
    margin-top: 5px;
}
button{
    margin-top: 10px;
    width: 100px;
    height: 40px;
}

`