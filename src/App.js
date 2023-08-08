import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      
        <Route path="/home" element={<Landing />} />
        <Route path="/store" element={<ItemListContainer />} />
        <Route path='/store/:itemCategory' element={<ItemListContainer/>}/>
        <Route path="/store/:itemId" element={<ItemDetailContainer />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
