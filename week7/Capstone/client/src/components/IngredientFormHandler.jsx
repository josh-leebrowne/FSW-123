const IngredientsFormHandler = (drink) => {
    console.log(drink)
    return(
        <div className="ingredients-form">
            <h1 className="ingredients-title">Ingredients: {drink.strDrink}</h1>
            <div>
                {drink.strIngredient1}
            </div>
            <div>
                {drink.strIngredient2}
            </div>
            <div>
                {drink.strIngredient3}
            </div>
            <div>
                {drink.strIngredient4}
            </div>
            <div>
                {drink.strIngredient5}
            </div>
            <div>
                {drink.strIngredient6}
            </div>
            <div>
                {drink.strIngredient7}
            </div>
            <div>
                {drink.strIngredient8}
            </div>
            <div>
                {drink.strIngredient9}
            </div>
            <div>
                {drink.strIngredient10}
            </div>
        </div>
    )
}

export default IngredientsFormHandler