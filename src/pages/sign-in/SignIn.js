import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyContext from "../../components/MyContext";
export default function SignIn() {
  const { setToken } = useContext(MyContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function fazerLogin(e) {
    e.preventDefault();

    const body = {
      email: email,
      password: senha,
    };
    const promise = axios.post("https://growup-api.onrender.com/sign-in", body);
    promise.then((res) => {
      console.log(res.data.token);
      setToken(res.data.token);
      navigate("/");
    });
    promise.catch((err) => {
      alert(err.response.data);
      setEmail("")
      setSenha("")
    });
    
  }
  return (
    <>
      <form onSubmit={fazerLogin}>
        <Container>
          <input
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-mail"
          ></input>
          <input
            required
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="senha"
          ></input>
          <button type="submit">Entrar</button>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Container>
      </form>
    </>
  );
}
const Container = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input {
    margin-top: 6px;
    width: 303px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "Lexend Deca", sans-serif;
  }
  button {
    margin-top: 6px;
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 5px;
    border: 1px solid #52b6ff;
    color: white;
    font-size: 20px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
  }
  p {
    margin-top: 25px;
    text-decoration: underline;
    font-weight: 400;
    font-size: 14px;
    color: #52b6ff;
    font-family: "Lexend Deca", sans-serif;
  }
`;
