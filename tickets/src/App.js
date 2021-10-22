import { useState } from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import FunctionalComponent from './components/functional-component/FunctionalComponent';
import { Item } from './components/items/Items';
import Container from './layouts/Container';


const hello = "Hello World"

function App() {

  const [name, setName] = useState ("");

  const showMessage = () => {
    alert (`Welcome back ${hello} `);
  };
 
  const themes = ["red", "blue", "green", "yellow"];
  
  return (
    <div className="App">
      <NavBar/>
      <h1>Hola {name}</h1>

      <ul>
        <Container>
        {themes.map((theme) => (
          <Item key={theme}> {theme} </Item>
        )
        )}
        </Container>
      </ul>
      <FunctionalComponent 
        hello = {hello}
        setName = {setName}
        showMessage= {showMessage} />
     <h1>Hola</h1>
    </div>
  );
}

export default App;
