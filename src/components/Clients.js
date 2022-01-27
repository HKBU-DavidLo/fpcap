import { Fragment, useState, useEffect } from 'react'

import classes from './Clients.module.css'
import ButtonGroup from './UI/ButtonGroup'
import CardWrapper from './UI/CardWrapper'

const Clients = () => {

    const [clickedButtonId, setClickedButtonId] = useState(0)
    const [transactions, setTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState()

    const contentHandler = (i) => {
        setClickedButtonId(i)
    }

    const txType = ['Listing', 'Circular', 'Circular', 'Completion']

    useEffect(() => {
        const fetchTransactions = async () => {

            const dbRef = ['ipo.json', 'fa.json', 'ifa.json', 'ecm.json']
            
            const docDate = {
                0: 'listing_date',
                1: 'circular_date',
                2: 'circular_date',
                3: 'completion_date'
            }
            const response = await fetch(
                `https://dlcrwn-db-default-rtdb.firebaseio.com/${dbRef[clickedButtonId]}`
            )

            if (!response.ok)  {
                throw new Error('The data cannot be loaded at the moment, try again later')
            }

            const responseData = await response.json()

            const loadedTransactions = []

            for (const key in responseData) {
                loadedTransactions.push({
                    id: key,
                    eng_name: responseData[key].eng_name,
                    image: responseData[key].image,
                    stockCode: responseData[key].stock_code,
                    date: responseData[key][docDate[clickedButtonId]]
                })
            }

            setTransactions(loadedTransactions)
            setIsLoading(false)
        }

        fetchTransactions().catch((error) => {
            setIsLoading(false)
            setHttpError(error.message)
        })
    }, [clickedButtonId])

    return (
        <Fragment>
            <div className={classes['clients__main-container']}>
                <div>
                    <ButtonGroup buttons={["IPO", "Financial Advisory", "IFA", "ECM"]} handler={contentHandler} />
                </div>
                <section>
                    {isLoading && <p>Wait for the loading...</p>}
                    {httpError && <p>{httpError}</p>}
                    {(!isLoading && !httpError) && <CardWrapper cards={transactions} transaction={txType[clickedButtonId]} />}
                </section>
            </div>
        </Fragment>
    )
}

export default Clients