import classes from './CardWrapper.module.css'


const CardWrapper = ({ cards, transaction }) =>  {

    const strToDay = (dateStr) => {
        const year = +dateStr.substring(0, 4)
        const month = +dateStr.substring(4, 6)
        const day = +dateStr.substring(6, 8)
        const date = new Date(year, month-1, day)
        const formatedDay = date.getUTCDate()
        const formatedMonth = date.getUTCMonth() + 1
        const formatedYear = date.getUTCFullYear()
        return formatedDay + '/' + formatedMonth + '/' + formatedYear
    }

    return (
        <ul className={classes['card-wrapper']}>
            {cards.map((project) => (
                <li key={project.id} className={classes.card}>
                    <img src={project.image} alt={`${project.eng_name}'s document image`} />
                    <h3>{project.eng_name}</h3>
                    <p>Stock Code: {project.stockCode}</p>
                    <p>Date of {transaction}: {strToDay(project.date.toString())}</p>
                </li>
            ))}
        </ul>
    )

}


export default CardWrapper