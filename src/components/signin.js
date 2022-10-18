import { Link } from '@material-ui/core'
import React, { useState } from 'react'
import './styles/styles.css'
import signin from '../imagenes/signin.jpg'
import { onRegistration } from '../api/api'

export const Signin = () => {
    const [values, setValues] = useState({
        date_us: "",
        name_us: "",
        lastnm_us: "",
        mail_us: "",
        pass_us: "",
        tel_us: ""
    })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await onRegistration(values)
            setError('')
            setSuccess(data.message)
            setValues({
                date_us: "",
                name_us: "",
                lastnm_us: "",
                mail_us: "",
                pass_us: "",
                tel_us: ""
            })
        } catch (error) {
            setError(error.response.data.errors[0].msg)
            setSuccess('')
        }
    }
    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign In</h2>
                            <form className="register-form" id="register-form" onSubmit={(e) => onSubmit(e)}>
                                <div className="form-group">
                                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input onChange={(e) => onChange(e)} type="text" value={values.name_us} name="name_us" id="name_us" placeholder="Your Name" autoComplete="off" required/>
                                </div>
                                <div className="form-group">
                                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input onChange={(e) => onChange(e)} type="text" value={values.lastnm_us} name="lastnm_us" id="lastnm_us" placeholder="Your Last Name" autoComplete="off" required/>
                                </div>
                                <div className="form-group">
                                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input onChange={(e) => onChange(e)} type="date" value={values.date_us} name="date_us" id="date_us" placeholder="Your Date" autoComplete="off" required/>
                                </div>
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input onChange={(e) => onChange(e)} type="email" value={values.mail_us} name="mail_us" id="mail_us" placeholder="Your Email"  autoComplete="off" required/>
                                </div>
                                <div className="form-group">
                                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input onChange={(e) => onChange(e)} type="password" value={values.pass_us} name="pass_us" id="pass_us" placeholder="Password" autoComplete="off" required/>
                                </div>
                                <div className="form-group">
                                    <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" required/>
                                </div>
                                <div className="form-group">
                                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input onChange={(e) => onChange(e)} type="text" value={values.tel_us} name="tel_us" id="tel_us" placeholder="Telephone" autoComplete="off" required/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                {
                                    error && <p style={{color: "red"}}>{error}</p>
                                }
                                {
                                    success && <p style={{color: "greem"}}>{success}</p>
                                }
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={signin} alt="sing up image" /></figure>
                            <Link to="/login">
                                <a href="/login" className="signup-image-link">I am already member</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
