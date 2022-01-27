import classes from './Contact.module.css'
import { Fragment } from 'react'
import Heading from './UI/Heading'
import ButtonGroup from './UI/ButtonGroup'
import ContactForm from './UI/ContactForm'

const Contact = () => {

    return (
        <Fragment>
            <div className={classes['contact__main-container']}>
                <div className={classes.contact__left_panel}>
                    <div>
                        <ButtonGroup buttons={['Contact Us']} />
                    </div>
                </div>
                <section>
                    <Heading text="Frontpage Capital Limited" />
                    <table>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>26th Floor, Siu On Center, 188 Lockhart Road, Wan Chai, Hong Kong</td>
                        </tr>
                        <tr>
                            <td>Telephone</td>
                            <td>:</td>
                            <td>+852 2180 5222</td>
                        </tr>
                        <tr>
                            <td>Fax</td>
                            <td>:</td>
                            <td>+852 2180 5299</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>admin@fpcap.com.hk</td>
                        </tr>
                    </table>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9963566974366!2d114.1720759154152!3d22.27812784932816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005b851103c9%3A0xcefd48c1f5948d0a!2z6aaZ5riv54Gj5LuU6aex5YWL6YGTMTg46Jmf5YWG5a6J5Lit5b-D!5e0!3m2!1szh-TW!2suk!4v1642362253451!5m2!1szh-TW!2suk" width="600" height="450" style={{border:0, marginBottom: 32 }} allowfullscreen="" loading="lazy"></iframe>
                    <Heading text="Enquiry/Complaint Form" />
                    <ContactForm />
                </section>
            </div>
        </Fragment>
    )
}

export default Contact