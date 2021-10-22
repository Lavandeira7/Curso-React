import { useState } from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import FunctionalComponent from './components/functional-component/FunctionalComponent';
import { Item } from './components/items/Items';
import Container from './layouts/Container';
import ItemListContainer from './layouts/item-list-container/ItemListContainer';


const hello = "Hello World"
const themes = ["red", "blue", "green", "yellow"];

function App() {

  const [name, setName] = useState ("");

  const showMessage = () => {
    alert (`Welcome back ${hello} `);
  };

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
      <h1>Hola {name}</h1>

      <ul>
        <Container>
        {themes.map((theme) => (
                <Item key={theme} color={theme} item={theme} />
              ))}
        </Container>
      </ul>
      <FunctionalComponent 
        hello = {hello}
        setName = {setName}
        showMessage= {showMessage} />
      </ItemListContainer>
    </div>
   
  );
}

export default App;
