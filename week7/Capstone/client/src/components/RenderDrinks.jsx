import setLocalStorage from "../helpers/setLocalStorage";
import { useState } from "react";
import IngredientsFormHandler from "./IngredientFormHandler";

const RenderDrinks = ({drinks, isLoading}) => {
    const [editToggle, setEditToggle] = useState(false)

    let mappedDrinks = drinks.map(e => {
        return (
            <div key={e.idDrink} className='Drink'>
                <h3 className='drink-name'>{e.strDrink}</h3>
                <img src={e.strDrinkThumb} alt={"No Image Available"} className="image"></img>
                <button className='add-drink' onClick={()=> setLocalStorage(e)}>Add to My List</button>
                <button className="ingredients" onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Ingredients</button>
            </div>
        )
    })


    return (
        <div className='Drinks'>
            {!editToggle ?
                <>
                    {isLoading ? <div className='loading-screen'><h1>Loading...</h1></div> : mappedDrinks }
                </>
                :
                <>
                    <IngredientsFormHandler drinks={drinks} mappedDrinks={mappedDrinks}/>
                    <button className="close-btn" onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    );
}

export default RenderDrinks