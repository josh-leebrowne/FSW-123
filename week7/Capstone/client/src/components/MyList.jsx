const MyList = ({setDrinks}) => {
    const setMyList = () => {
        let parsedData = JSON.parse(localStorage.getItem('favoriteDrinks'))
        setDrinks(parsedData)
    }

    return (
        <div>
            <button className="my-list" onClick={setMyList}>My List</button>
        </div>
    )
}

export default MyList