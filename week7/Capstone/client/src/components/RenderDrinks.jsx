import Drink from "./Drink";

const RenderDrinks = ({drinks, isLoading}) => {

    let mappedDrinks = drinks.map((drink, i)=> {
        return (
            <Drink 
                drink={drink}
                key={i}
                _id={drink.idDrink}
                img={drink.strDrinkThumb}
            />
        )
    })

    
    return (
        <div className='Drinks'>
            {isLoading ? <div className='loading-screen'><h1>Loading...</h1></div> : mappedDrinks }
        </div>
    );
}

export default RenderDrinks