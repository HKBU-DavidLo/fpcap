import { NavLink } from 'react-router-dom'

import classes from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={classes.logo}><NavLink to='/fpcap'><img src="/fpcap/images/fp_logo.png" alt="Frontpage Logo" /></NavLink></div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/fpcap' activeClassName={classes.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/fpcap/about' activeClassName={classes.active}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/fpcap/services' activeClassName={classes.active}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/fpcap/clients' activeClassName={classes.active}>Clients</NavLink>
                    </li>
                    <li>
                        <NavLink to='/fpcap/contact-us' activeClassName={classes.active}>Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header