import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Cart from "../../components/Cart";
import MyContext from "../../components/MyContext";
export default function Products() {
  const { token } = useContext(MyContext);
  console.log(token)

  const [produtos, setProdutos] = useState([]);
  const [cartProducts, setCardProducts] = useState([]);
  console.log(cartProducts);

  function listarProdutos() {
    const URL = "https://growup-api.onrender.com/products";
    const promise = axios.get(URL);

    promise.then((res) => {
      setProdutos(res.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }

  function getCart() {
    const URL = "https://growup-api.onrender.com/cart";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(URL, config);

    promise.then((res) => {
      setCardProducts(res.data);
      console.log(res.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }

  useEffect(() => {
    listarProdutos();
    getCart();
  }, []);

  const addProduct = (p) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = "https://growup-api.onrender.com/cart";
    const promise = axios.post(
      URL,
      { name: p.name, price: p.price, image: p.image },
      config
    );

    promise
      .then((res) => {
        console.log("Ok");
      })
      .catch((err) => {
        alert("Produto não inserido");
        console.log(err.response.data);
      });
  };

  return (
    <>
      <Cart cartProducts={cartProducts} setCardProducts={setCardProducts} />
      <Container>
        {produtos.map((p) => (
          <Produtc key={p.id}>
            <img src={p.image} alt={`${p.name} product`}></img>
            <h1>{p.name}</h1>
            <p>{p.description}</p>
            <p> {p.price} </p>
            <button onClick={() => addProduct(p)}>Adicionar</button>
          </Produtc>
        ))}
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  background-color: #ededed;
`;
const Produtc = styled.div`
  width: 300px;
  min-height: 400px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  border: 2px solid lightgray;
  img {
    width: 100px;
    height: 120px;
  }

  h1 {
    font-size: 30px;
    font-family: "Lexend Deca", sans-serif;
  }
  p {
    font-family: "Lexend Deca", sans-serif;
    align-self: flex-end;
  }
  button {
    margin-top: 10px;
    width: 40%;
    height: 40px;
    background-color: #00c147;
    border: none;
    border-radius: 50px;
    font-family: "Lexend Deca", sans-serif;
    color: white;
  }
`;
