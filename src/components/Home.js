import { Fragment } from 'react'
import classes from './Home.module.css'

const Home = () => {
    return (
        <Fragment>
            <section className={classes['home__section']}>
                <div className={classes['home__image-container']}>
                    <img src="/images/fp_office.webp" alt="office" />
                </div>
            
                <p><strong>Frontpage Capital Limited</strong> is a boutique investment bank established in 2015 to provide corporate finance services and solutions to companies listed or intending to be listed on the Hong Kong Stock Exchange. </p>
                <p>We emphasize on building our business and reputation through reliable services, knowledgeable advice and our hands-on approach to assisting companies in meeting their financial goals.</p>
                <p>We understand that operating a business is not an easy task and therefore, we try to resolve your needs so that you can focus on important things of your business. Our team members bring with them years of experience and multiple successful cases to help you manage through the financial markets, assist your company's listing and being in compliance with the Hong Kong Listing Rules.</p>
            </section>
        </Fragment>
    )
}

export default Home