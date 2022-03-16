console.log("test")


function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    test = Math.floor(Math.random() * (max - min) + min)
    console.log(test)
}

getRandomInt()