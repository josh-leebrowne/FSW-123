const setLocalStorage = (e) => {
    let storage = [e]

    if(localStorage.getItem('favoriteDrinks')) {
        let prevStorage = JSON.parse(localStorage.getItem('favoriteDrinks'))
        storage = [...storage, ...prevStorage]
    }

    localStorage.setItem('favoriteDrinks', JSON.stringify(storage))
}

export default setLocalStorage