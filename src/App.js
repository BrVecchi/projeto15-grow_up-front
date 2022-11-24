import Login from "./Login";
import GlobalStyle from "./Globastyle";
import Cadastro from "./Cadastro";
import Produtos from "./Produtos";
import Topo from "./Topo";
import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle/>
    <Topo></Topo>
    <Routes>
    <Route path="/sign-up" element={<Cadastro/>}/>
    <Route path="/sign-in" element={<Login/>}/>
    <Route path="/products" element={<Produtos/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
