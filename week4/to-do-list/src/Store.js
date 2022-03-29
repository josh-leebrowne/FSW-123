import {v4 as uuidv4} from "uuid"

export const toDoStore = [
    {
        text: "Go to Gym", 
        _id: uuidv4(),
        isComplete: false
    },
    {   
        text: "Do Laundry", 
        _id: uuidv4(),
        isComplete: false
    },
    {
        text: "Food Shopping", 
        _id: uuidv4(),
        isComplete: false
    },
    {
        text: "Do Homework", 
        _id: uuidv4(),
        isComplete: false
    },
]