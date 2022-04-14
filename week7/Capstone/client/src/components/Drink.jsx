import setLocalStorage from "../helpers/setLocalStorage";


const Drink = (drink, setEditToggle) => {

    return(
            <>
                <div key={drink.idDrink} className='Drink'>
                <h3 className='drink-name'>{drink.strDrink}</h3>
                <img src={drink.strDrinkThumb} alt={""} className="image"></img>
                <button className='add-drink' onClick={()=> setLocalStorage(drink)}>Add to My List</button>
                <button className="ingredients" onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Ingredients</button>
                </div>

            </>
        )
}

export default Drink