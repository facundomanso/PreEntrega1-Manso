import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {'Bienvenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('se agregaron' , quantity)}/>
    </>
  );
}

export default App;
