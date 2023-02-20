const NumberToCard = ({number, numberSize, theme = "white"}) => {
    return(
        <span className={`${theme} numberToCard`}><span className="morado">{number}</span>/{numberSize}</span>
    )
}

export default NumberToCard;