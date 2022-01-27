import classes from './Services.module.css'
import { Fragment } from 'react'
import Heading from './UI/Heading'
import ButtonGroup from './UI/ButtonGroup'

const Services = () => {
    return (
        <Fragment>
            <div className={classes['services__main-container']}>
                <div className={classes.services__left_panel}>
                    <div>
                        <ButtonGroup buttons={['Our Services']} />
                    </div>
                </div>
                <section>
                    <p>Frontpage Capital is licensed under the Securities and Futures Ordinance of Hong Kong to perform Type 1 (dealing in securities) and Type 6 (advising on corporate finance) regulated activities in Hong Kong. We principally provide the following services:</p>
                    <Heading text="Pre-IPO Advisory" />
                    <p>We advise companies planning to seek listing on GEM or the Main Board of the Hong Kong Stock Exchange regarding how to grow their companies to become successful applicants. If required, we also assist the companies to source necessary pre-IPO funding which allow them to become sizable and suitable companies for listing.</p>
                    <Heading text="Initial Public Offering" />
                    <p>Frontpage Capital is licensed by the SFC to act as a listing applicant's sponsor for initial public offering, as well as the underwriter/bookrunner for the shares issued in connection with the IPO. We are experienced in listing businesses of various industries as we possess a critical perspective to evaluate the needs of the business owners, investing public as well as the regulators.</p>
                    <Heading text="Financial Advisory" />
                    <p>Our financial advisory services involve unlisted and listed companies on the Hong Kong Stock Exchange. We provide advice to companies looking to undertake corporate actions, and assist them in coordinating the exercise, including ensuring the compliance of those companies listed on the Hong Kong Stock Exchange.</p>
                    <Heading text="Independent Financial Advisory" />
                    <p>We provide independent financial advice to companies listed on the Hong Kong Stock Exchange when their corporate action requires such advice to ensure its fairness and reasonableness to public or minority shareholders. We also provide such advice to private companies and corporate boards in order for them to form an informed judgment on their corporate decisions.</p>
                    <Heading text="Compliance Advisory" />
                    <p>As part of the Hong Kong Listing Rules requirements, companies newly listed on GEM or Main Board of the Hong Kong Stock Exchange are required to engage a compliance adviser. Our team has significant experience in acting as a compliance adviser for large corporations, as well as state-owned enterprises, listed on the Hong Kong Stock Exchange.</p>
                </section>
            </div>
        </Fragment>
    )
}

export default Services