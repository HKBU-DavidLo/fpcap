import { useState } from "react"
import useInput from "../../hooks/use-inputs"
// useInput returns format: 
/* {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
}
*/
import classes from './ContactForm.module.css'

const isNotEmpty = value => value.trim() !== ''
const isEmail = value => value.includes('@')

const ContactForm = (props) => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)

    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput
    } = useInput(isNotEmpty)

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput
    } = useInput(isNotEmpty)

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail)

    const {
        value: enteredPhone,
        isValid: enteredPhoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangedHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhoneInput
    } = useInput(isNotEmpty)

    const {
        value: enteredEnquiry,
        isValid: enteredEnquiryIsValid,
        hasError: enquiryHasError,
        valueChangeHandler: enquiryChangedHandler,
        inputBlurHandler: enquiryBlurHandler,
        reset: resetEnquiryInput
    } = useInput(isNotEmpty)

    let formIsValid = false

    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid && enteredPhoneIsValid && enteredEnquiryIsValid) {
        formIsValid = true
    }
    
    const formSubmissionHandler = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        if (!formIsValid) {
            return
        }

        await fetch('https://dlcrwn-db-default-rtdb.firebaseio.com/enquiry.json', {
            method: 'POST',
            body: JSON.stringify({
                first_name: enteredFirstName,
                last_name: enteredLastName,
                email: enteredEmail,
                phone: enteredPhone,
                message: enteredEnquiry,
                date: Date.now(),
            }),
        })

        setIsSubmitting(false)
        setDidSubmit(true)

        resetFirstNameInput()
        resetLastNameInput()
        resetEmailInput()
        resetPhoneInput()
        resetEnquiryInput()
    }

    const firstNameClasses = firstNameHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const lastNameClasses = lastNameHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const emailClasses = emailHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const phoneClasses = phoneHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const textareaClasses = enquiryHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']

    return (
        <form onSubmit={formSubmissionHandler}>
            {isSubmitting && <p className={classes['form-processing']}>Your form is being submitted...</p>}
            {didSubmit && <p className={classes['form-submitted']}>Form submitted successfully, thank you.</p>}
            <div className={classes['control-group']}>
                <div className={firstNameClasses}>
                    
                    <input 
                        type='text' 
                        id='first name' 
                        placeholder='First Name'
                        value={enteredFirstName} 
                        onChange={firstNameChangedHandler} 
                        onBlur={firstNameBlurHandler} 
                    />
                    {firstNameHasError && <p className={classes['error-text']}>First Name is Empty</p>}
                </div>
                <div className={lastNameClasses}>
                    <input 
                        type='text' 
                        placeholder='Last Name'
                        id='last name' 
                        value={enteredLastName} 
                        onChange={lastNameChangedHandler} 
                        onBlur={lastNameBlurHandler} 
                    />
                    {lastNameHasError && <p className={classes['error-text']}>Last Name is Empty</p>}
                </div>
                <div className={emailClasses}>
                    <input 
                        type='email' 
                        id='email' 
                        placeholder='Email'
                        value={enteredEmail} 
                        onChange={emailChangedHandler} 
                        onBlur={emailBlurHandler} 
                    />
                    {emailHasError && <p className={classes['error-text']}>Invalid email</p>}
                </div>
                <div className={phoneClasses}>
                    <input 
                        type='phone' 
                        id='phone' 
                        placeholder='Phone Number'
                        value={enteredPhone} 
                        onChange={phoneChangedHandler} 
                        onBlur={phoneBlurHandler} 
                    />
                    {phoneHasError && <p className={classes['error-text']}>Phone is Empty</p>}
                </div>
                <div className={textareaClasses}>
                    <textarea 
                        rows={7}
                        placeholder='Type your message here...'
                        id='message'
                        value={enteredEnquiry}
                        onChange={enquiryChangedHandler}
                        onBlur={enquiryBlurHandler}
                    />
                    {enquiryHasError && <p className={classes['error-text']}>Please input your message.</p>}
                </div>
            </div>

            <div className={classes['form-actions']}>
                <button disabled={!formIsValid || didSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default ContactForm