import classes from './Heading.module.css'

const Heading = ({ text }) => {
    return (
        <div className={classes.heading}>
            <h1>{text}</h1>
        </div>
    )
}

export default Heading