import axios from "axios";

const RandomDrink = ({setDrinks, setIsLoading}) => {

    const getRandomDrink = async () => {
        setIsLoading(true)

        try{
            let response = await apiRequest('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            console.log(response.drinks)
            setDrinks(response.drinks)
            setIsLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    async function apiRequest(url) {
        return new Promise( (resolve, reject) => {
            axios.get(url)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    }


    return(
        <div className="randomdrink-container">
            <button className="random-btn" onClick={getRandomDrink}>Random Drink</button>
        </div>
    )
}

export default RandomDrink