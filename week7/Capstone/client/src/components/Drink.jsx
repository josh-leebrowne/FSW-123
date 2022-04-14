import setLocalStorage from "../helpers/setLocalStorage";
import deleteLocalStorage from "../helpers/deleteLocalStorage";
import { useState } from "react";
import IngredientsFormHandler from "./IngredientFormHandler";


const Drink = ({ drink, _id, img,}) => {
    const [editToggle, setEditToggle] = useState(false)

    return(
            <div className="testDiv">
                {!editToggle?
                    <>
                        <div key={_id} className='Drink'>
                        <h3 className='drink-name'>{drink.strDrink}</h3>
                        <img src={img} alt={""} className="image"></img>
                        <button className='add-drink' onClick={()=> setLocalStorage(drink)}>Add to My List</button>
                        <button className="delete-drink" onClick={()=> deleteLocalStorage(drink)}>Delete from My List</button>
                        <button className="ingredients" onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Ingredients</button>
                        </div>
                    </>
                    :
                    <>
                        <IngredientsFormHandler 
                        drink={drink}
                        strDrink={drink.strDrink}
                        strIngredient1={drink.strIngredient1}
                        strIngredient2={drink.strIngredient2}
                        strIngredient3={drink.strIngredient3}
                        strIngredient4={drink.strIngredient4}
                        strIngredient5={drink.strIngredient5}
                        strIngredient6={drink.strIngredient6}
                        strIngredient7={drink.strIngredient7}
                        strIngredient8={drink.strIngredient8}
                        strIngredient9={drink.strIngredient9}
                        strIngredient10={drink.strIngredient10}/>
                        <button className="close-btn" onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                }
            </div>
        )
}

export default Drink