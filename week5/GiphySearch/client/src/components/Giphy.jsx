import { useEffect, useState } from "react";
import axios from "axios";



const Giphy = () => {

    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData =  async () => {
            setIsError(false)
            setIsLoading(true)

            try{
                let response = await axios(`https://api.giphy.com/v1/gifs/trending?api_key=phJW89PwGsMBfdGV00qbSWa3zqKL3s3T&limit=25&rating=g`)
            
                console.log(response.data.data)
                setGifs(response.data.data)
                setIsLoading(false)
            } catch (err) {
                setIsError(true)
                console.log(err)
            }
            
        };

        fetchData()
    },[])
    
    const renderGifs = () => {
        if (isLoading) {
            return <div className="testLoad"><h1>Loading...</h1></div>
        }
        return gifs.map(e => {
            return (
                <div key={e.id} className="item">
                    <img src={e.images.fixed_height.url} alt={"No Gif Available."}></img>
                </div>
            )
        })
    } 

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault() 
        let api_key = "phJW89PwGsMBfdGV00qbSWa3zqKL3s3T&limit=25&rating=g"
        let q = search
        let response = await axios(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURIComponent(q)}`)
        setGifs(response.data.data)
    }
    
    const renderError = () => {
        if (isError) {
            return (
                <div>
                    <h1>An Error has Occurred.</h1>
                </div>
            )
        }
    }
    return (
        <div>
            <form className="form">
                <input
                value={search}
                onChange={handleSearchChange}
                className="search" 
                type='text'
                placeholder="Search for a Gif"
                />
                <button type="submit" className="search-btn" onClick={handleSubmit}>Search</button>
            </form>
            {renderError()}
            <div className="Gifs">{renderGifs()}</div>
        </div>
    )
}

export default Giphy;