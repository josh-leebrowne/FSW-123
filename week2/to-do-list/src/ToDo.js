
const ToDoList = (props) => {
    const data = props.store
    
    return(
        <div className="to-do-list">
            {data.map((store) => (
                <div className="list-checkbox" key={store.id}>
                    <input type="checkbox"/>{store.text}
                </div>
            ))}
        </div>      
    )
}
    
export default ToDoList;


 // <div>
            //     <h1>To Do List</h1>
            //     <ul>
            //         <input type="checkbox"/>Go to Gym<br></br>
            //         <input type="checkbox"/>Do Laundry<br></br>
            //         <input type="checkbox"/>Food Shopping<br></br>
            //         <input type="checkbox"/>Do Homework<br></br>
            //     </ul>
            // </div>

            // {data.map((index) => (
            //     <div className="list-checkbox" key={index}>
            // ))}
            //<p key={store.id}>{store.text}</p>