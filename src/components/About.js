import { Fragment, useState } from 'react'

import classes from './About.module.css'
import ButtonGroup from './UI/ButtonGroup'

const About = () => {
    const fpValues = (<Fragment><p>“Gentleman understands integrity while mean man understands gain.”</p>
                      <div style={{textAlign: 'right'}}><p>--Confucius</p></div>
                      <p>It is undeniable that the financial market is complex and full of treacherous pitfalls. We at Frontpage believes in demystifying these complexities and guiding our clients through their journey in the financial market. While we enjoy profiting from our business, we gain greater satisfaction in educating our clients and helping them to avoid costly pitfalls on their road to success, and eventually seeing them achieve their financial goals.</p>
                      ​<p>We have built our reputation over the years in advising our clients with integrity and putting their interest ahead in every advice we make and as a result, our customers became our friends. This value is the foundation of our success at Frontpage.</p></Fragment>)
    
    const fpCulture = (<Fragment>
                        <p>"Great thing in business are never done by one person. They're done by a team of people."</p>
                        <div style={{textAlign: 'right'}}><p>--Steve Paul Jobs</p></div>
                        <p>At Frontpage, we believe that every successful deal begins with teamwork. This means rolling up our sleeves to work at the detail level with your professional team of lawyers, accountants, and consultants, instead of providing high-level advice or comments, and taking a coordinator role. We believe that by putting ourselves at the ground level together with your professional advisers, we will have a better understanding of the matters on hand and therefore, could provide you with better solutions to your financial needs.</p>
                        <p>This practice of working on the details also gives us an edge by keeping us on the forefront of the market trends as we familiarise ourselves with minor changes as the industry evolves continuously. Our customers therefore enjoy the benefits of our ability to manage a highly efficient team of professional advisers as we gain a better understanding of the matters brought up by the professional advisers.</p>
                       </Fragment>)
    
    const fpTeam = (<Fragment>
                        <h1>Tony Chan (Director)</h1>
                        <p>Tony graduated with a Master degree in Operations and Supply Chain Management from the City University of Hong Kong and a Bachelor degree in Accounting from the Hong Kong Polytechnic University.</p>
                        <p>Before co-founding Frontpage, Tony had worked for two boutique investment banks for over 10 years. He is highly experienced in IPOs, financial advisory transactions and compliance work under the rules and regulations of the Hong Kong Stock Exchange and the Securities and Futures Commission.</p>
                        <p>He is a member of Hong Kong Institute of Certified Public Accountants, Association of Chartered Certified Accountants, Chartered Institute of Management Accountants and Hong Kong Securities Institute. He is also a Certified International Investment Analyst.</p>
                        <h1>Chai Yee Choong (Director)</h1>
                        <p>Yee Choong holds a Bachelor degree in Finance from Oklahoma State University, United States. </p>
                        <p>Prior to co-founding Frontpage, Yee Choong worked as a venture capitalist investing in dot com companies and an investment banker for two boutique investment banks. During his tenure with these companies, he worked in Malaysia, China and Hong Kong gaining local knowledge. Throughout the years, he has gained significant knowledge from the Hong Kong financial market and has completed numerous financial advisory, IPOs and helped clients address their compliance issues.</p>
                        <p>Yee Choong has a wide array of industry experience and know-how ranging from technology to property development. By involving in the stock exchanges of Malaysia, London and Hong Kong, he has substantial knowledge of different types of IPO of different markets. He has also participated in various M&amps;A and IPO transactions of Chinese companies, debt and project restructuring, and venture capital investment.</p>
                        <h1>David Lo (Director)</h1>
                        <p>David graduated from the University of Hong Kong with a Master degree in Finance and a Bachelor degree in Civil Engineering.</p>
                        <p>He has over 7 years of industry experience and has completed various types of corporate finance transactions, including M&amps;As, company restructuring and fundraising, as well as schemes of arrangement and debt restructuring activities.</p>
                        <p>Prior to becoming an investment banker, David served in a listed financial company as a business analyst, responsible for business and financial instrument valuation.</p>
                        <p>David is a member of the Hong Kong Institute of Certified Public Accountants.</p>
                        <h1>Wubi Wu (Director)</h1>
                        <p>Wubi graduated from the University of Hong Kong with a Bachelor degree in Civil Engineering.</p>
                        <p>Prior to joining Frontpage, he worked in a boutique investment bank involving himself with the listing of 5 companies in a short span of few years.</p>
                        <p>Wubi was once an employee of an infrastructure management firm, which is listed on the Hong Kong Stock Exchange, and was responsible for project management, business analysis and disposal negotiation.</p>
                    </Fragment>)

    const contents = [fpValues, fpCulture, fpTeam]

    const [text, setText] = useState(fpValues)

    const contentHandler = (i) => {
        setText(contents[i])
    }
    
    return (
        <Fragment>
            <div className={classes['about__main-container']}>
                <div>
                    <ButtonGroup buttons={["Our Values", "Our Culture", "Our Team"]} handler={contentHandler} />
                </div>
                <section>
                    {text}
                </section>
            </div>
        </Fragment>
    )
}

export default About