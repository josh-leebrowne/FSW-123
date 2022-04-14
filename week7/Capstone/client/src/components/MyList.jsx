import RenderDrinks from "./RenderDrinks"

const MyList = ({setDrinks}) => {
    const setMyList = () => {
        let parsedData = JSON.parse(localStorage.getItem('favoriteDrinks'))
    
        setDrinks(parsedData)
        console.log(parsedData)
    }

    return (
        <div>
            <button className="my-list" onClick={setMyList}>My List</button>
            {/* <RenderDrinks setMyList={setMyList}/> */}
        </div>
    )
}

export default MyList