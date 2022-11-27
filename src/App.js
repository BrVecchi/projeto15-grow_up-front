import GlobalStyle from "./styles/Globastyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Products from "./pages/products/Products";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import Header from "./components/Header";
function App() {


  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Products />} />
        </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
