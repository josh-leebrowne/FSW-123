import Drinks from './components/Drinks';
import RandomDrink from './components/RandomDrink';
import RenderDrinks from './components/RenderDrinks';
import { useState } from 'react';
import './App.css';
import MyList from './components/MyList';

function App() {

  const [drinks, setDrinks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  return(
    <div>
      <h1 className='title'>Cocktail Builder</h1>
      <MyList setDrinks={setDrinks}/>
      <RandomDrink 
        drinks={drinks} 
        setIsLoading={setIsLoading} 
        isLoading={isLoading} 
        setDrinks={setDrinks}/>
      <Drinks 
        setIsLoading={setIsLoading} 
        setDrinks={setDrinks}/>
      <RenderDrinks 
        drinks={drinks} 
        isLoading={isLoading}/>
    </div>
  )
}

export default App;
