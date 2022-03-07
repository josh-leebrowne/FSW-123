
import './Card.css'

const Card = (props) => {
    return(
        <div className="wrapper">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.descr}</p>
        </div>
    )
}

export default Card;