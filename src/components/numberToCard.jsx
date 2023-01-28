const NumberToCard = ({number, numberSize, theme = "white"}) => {
    return(
        <span className={`${theme} numberToCard`}>{number}/{numberSize}</span>
    )
}

export default NumberToCard;