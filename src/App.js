import GlobalStyle from "./styles/Globastyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Products from "./pages/products/Products";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import Header from "./components/Header";
import MyContext from "./components/MyContext";
function App() {
  const [token, setToken] = useState("");
  const [cartDisplay, setCartDisplay] = useState("none");


  return (
    <MyContext.Provider value={{ token, setToken, cartDisplay, setCartDisplay }}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
