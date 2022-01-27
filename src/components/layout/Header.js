import { NavLink } from 'react-router-dom'

import classes from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={classes.logo}><NavLink to='/'><img src="/images/fp_logo.png" alt="Frontpage Logo" /></NavLink></div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName={classes.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName={classes.active}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services' activeClassName={classes.active}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/clients' activeClassName={classes.active}>Clients</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact-us' activeClassName={classes.active}>Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header