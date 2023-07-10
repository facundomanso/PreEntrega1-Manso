import NavBar from './Components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {'Bienvenidos'}/>
    </>
  );
}

export default App;
