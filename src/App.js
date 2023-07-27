import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/detail/:itemId" element={<ItemDetailContainer/>} />
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
