import NavBar from "./components/NavBar";
import './app.css'
import ItemListContainer from '../src/components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const text = "¡Bienvenido a Shoes Store";

  return (
    <div>
      <BrowserRouter>


      <NavBar />


      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer itemId={2}/>}/>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;