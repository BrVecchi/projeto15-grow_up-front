import styled from "styled-components"
export default function Produtos() {
    return (
        <>
            <Container>
                <Produtcs>
                    <img src="https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.png"></img>
                    <h1>Whey Protein</h1>
                    <p>Proteina do soro de leite</p>
                    <p> R$ 170,00 </p>
                    <button>Adicionar ao carrinho</button>
                </Produtcs>
                <Produtcs> <img src="https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.png"></img>
                    <h1>Whey Protein</h1>
                    <p>Proteina do soro de leite</p>
                    <p> R$ 170,00 </p>
                </Produtcs>
                <Produtcs>
                    <img src="https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.png"></img>
                    <h1>Whey Protein</h1>
                    <p>Proteina do soro de leite</p>
                    <p> R$ 170,00 </p>
                </Produtcs>
                <Produtcs>
                    <img src="https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.png"></img>
                    <h1>Whey Protein</h1>
                    <p>Proteina do soro de leite</p>
                    <p> R$ 170,00 </p>
                </Produtcs>
                <Produtcs>
                    <img src="https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.png"></img>
                    <h1>Whey Protein</h1>
                    <p>Proteina do soro de leite</p>
                    <p> R$ 170,00 </p>
                </Produtcs>
                <Produtcs>
                    <img src="https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.png"></img>
                    <h1>Whey Protein</h1>
                    <p>Proteina do soro de leite</p>
                    <p> R$ 170,00 </p>
                </Produtcs>
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