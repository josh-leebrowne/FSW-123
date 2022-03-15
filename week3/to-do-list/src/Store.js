import {v4 as uuidv4} from "uuid"

export const toDoStore = [
    {
        text: "Go to Gym", 
        id: uuidv4(),
        isComplete: false
    },
    {   
        text: "Do Laundry", 
        id: uuidv4(),
        isComplete: false
    },
    {
        text: "Food Shopping", 
        id: uuidv4(),
        isComplete: false
    },
    {
        text: "Do Homework", 
        id: uuidv4(),
        isComplete: false
    },
]