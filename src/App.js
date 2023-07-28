import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Landing from "./Components/Landing/Landing";
import Categories from "./Components/categories/Categories";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Landing/>} />
        <Route exact path="/store" element={<Categories/>} />
        <Route exact path="/store/:itemId" element={<ItemDetailContainer/>} />
        <Route exact path="/about" element={<ItemListContainer/>} />
        <Route exact path="/contact" element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <NavBar/>
    //   <ItemListContainer greeting = {'Bienvenidos'}/>

    //   <ItemDetailContainer/>
    // </>
  );
}

export default App;
