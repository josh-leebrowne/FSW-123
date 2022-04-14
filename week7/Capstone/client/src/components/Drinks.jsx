import {useState, useEffect} from 'react'
import axios from 'axios';

const Drinks = ({setDrinks, setIsLoading}) => {
    const [search, setSearch] = useState('')
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        const getData = async () => {
        setIsError(false)
        setIsLoading(true)

        try {
            let response = await apiRequest('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
            setDrinks(response.drinks)
            setIsLoading(false)
        } 
        catch (err) {
            setIsError(true)
            console.log(err)
        }
        }
        getData()
    },[])

    async function apiRequest(url) {
        return new Promise( (resolve, reject) => {
            axios.get(url)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    }

    const handleSearchSubmitChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault()
        setIsError(false)
        setIsLoading(true) 
        try{
            let q = search
            let response = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${q}`)
            if(response.data.drinks){
                setDrinks(response.data.drinks)
                setIsLoading(false)
            } else {
                setIsError(true)
            }
        }
        catch (err) {
            setIsError(true)
            console.log(err)
        }
    }

    const renderError = () => {
        if(isError){
            return(
                <div>
                    <h1>An Error has Occured.</h1>
                    <h3>You may try:</h3>
                    <p>- Entering a different drink.</p>
                    <p>- Check the spelling of the desired drink.</p>
                </div>
            )
        }
    }

    return (
        <div className="App">
            <form className='form'>
                <input
                    className='search-input'
                    value={search}
                    onChange={handleSearchSubmitChange}
                    type='text'
                    placeholder='Search for a Drink'
                    />
                <button type='submit' className='search-btn' onClick={handleSearchSubmit}>Search</button>
            </form>
            {renderError()}
        </div>
    );
}


export default Drinks
