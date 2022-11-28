import { useContext } from "react";
import styled from "styled-components";
import MyContext from "./MyContext";

export default function Cart({ cartProducts, setCardProducts }) {
  const { cartDisplay, setCartDisplay } = useContext(MyContext);

  const remove = (product) => {
    const newProducts = [...cartProducts];
    newProducts.filter((p) => p.name !== product.name);
    setCardProducts(newProducts);
  };
  const comprar = () => {
    setCardProducts([]);
  };

  const closeModal = () => {
    setCartDisplay("none");
  };

  return (
    <Container display={cartDisplay}>
      <Modal>
        <TitleModal>
          <span>Carrinho de compras:</span>
          <Back onClick={closeModal}>
            <img
              src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39219/preview.png"
              alt="icon close"
            />
          </Back>
        </TitleModal>

        <Products>
          {cartProducts.map((p) => (
            <Produtc key={p.id}>
              <img src={p.image} alt={`${p.name} product`}></img>
              <h1>{p.name}</h1>
              <p> {p.price} </p>
              <button onClick={() => remove(p)}>Remover</button>
            </Produtc>
          ))}
        </Products>
        <Comprar onClick={comprar}>Comprar</Comprar>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  display: ${(props) => props.display};
  justify-content: flex-end;
  font-family: "Lexend Deca", sans-serif;
  z-index: 2;
`;

const Modal = styled.div`
  background-color: white;
  width: 40%;
  height: 100%;
  padding-inline: 20px;
  z-index: 3;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Back = styled.div`
  img {
    width: 35px;
    height: 35px;
  }
`;

const TitleModal = styled.span`
  width: 100%;
  height: 66px;
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Lexend Deca", sans-serif;
  font-size: 30px;
`;

const Products = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Produtc = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 2px solid lightgray;
  img {
    width: 60px;
    height: 72px;
    margin-right: 10px;
  }
  h1 {
    font-size: 18px;
    font-family: "Lexend Deca", sans-serif;
    max-width: 40%;
  }
  button {
    width: 20%;
    height: 40px;
    background-color: #00c147;
    border: none;
    border-radius: 50px;
    font-family: "Lexend Deca", sans-serif;
    color: white;
  }
`;

const Comprar = styled.button`
  width: 40%;
  height: 40px;
  background-color: #52c9f0;
  border: none;
  border-radius: 50px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 25px;
  color: white;
  margin-top: 20px;
`;
