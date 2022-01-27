import { Fragment, useState } from 'react'
import classes from './ButtonGroup.module.css'

const ButtonGroup = ({ buttons, handler }) => {
    const [clickedId, setClickedId] = useState(-1)

    const clickHandler = (i) => {
        setClickedId(i)
        handler(i)
    }
    return (
        <Fragment>
            {buttons.map((buttonLabel, i) => (
                <button className={i === clickedId ? `${classes.button} ${classes.active}` : classes.button} key={i} name={buttonLabel} onClick={() => clickHandler(i)}>
                    {buttonLabel}
                </button>
            ))}
        </Fragment>
    )
}

export default ButtonGroup