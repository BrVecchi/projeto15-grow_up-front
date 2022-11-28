import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "./MyContext";
import { useContext } from "react";
export default function Header() {
  const navigate = useNavigate();
  const { setCartDisplay} = useContext(MyContext)

  const goHome = () => {
    navigate("/");
  };

  const openModal = () => {
    setCartDisplay("flex")
  }

  return (
    <>
      <Container>
        <Login>
          Bem vindo visitante, <Link to="/sign-up">cadastre-se</Link> ou{" "}
          <Link to="/sign-in">faça seu login</Link>
        </Login>
        <Logo onClick={goHome}>GrowUp</Logo>
        <Carrinho onClick={openModal}>
          <img src="./carrinho.png" alt="cart icon"></img>
        </Carrinho>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100wh;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3bcfff;
  padding: 0 30px 0 30px;
`;
const Logo = styled.div`
  font-size: 40px;
  font-family: "Lexend Deca", sans-serif;
  color: white;
  padding-right: 10%;
  &:hover {
    cursor: pointer;
  }
`;
const Login = styled.div`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  width: 200px;
`;
const Carrinho = styled.div`
  img {
    width: 40px;
    height: 40px;
    color: white;
  }
`;
