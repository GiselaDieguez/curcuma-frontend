import React, { useState } from 'react'
import { onLogin } from '../api/api'
import login from '../imagenes/login.jpg'
import { Footer } from './footer.js';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
    const [values, setValues] = useState({
        mail_us: "",
        pass_us: "",
      })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState()
      
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) =>{
        e.preventDefault()
        try {
            const {data} = await onLogin(values)
            setSuccess(data.message)
            console.log(data);
        } catch (error) {
            setError(error.response.data.errors[0].msg);
        }
    }
  return (
    <><div>
          <section class="sign-in login">
              <div class="container">
                  <div class="signin-content">
                      <div class="signin-image">
                          <figure><img src={login} alt="Log in image" /></figure>
                          <a href="/signin" class="signup-image-link">Create an account</a>
                      </div>
                      <div class="signin-form">
                          <h2 class="form-title">Log in</h2>
                          <form onSubmit={(e) => onSubmit(e)} class="register-form" id="login-form">
                              <div class="form-group">
                                  <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                  <input onChange={(e) => onChange(e)} type="email" value={values.mail_us} name="mail_us" id="mail_us" placeholder="Your Email" />
                              </div>
                              <div class="form-group">
                                  <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                  <input onChange={(e) => onChange(e)} type="password" value={values.pass_us} name="pass_us" id="pass_us" placeholder="Password" />
                              </div>
                              <div class="form-group">
                                  <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                  <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                              </div>
                              {error && <p style={{ color: "red" }}>{error}</p>}
                              {
                                    success && <p style={{color: "green"}}>{success}</p>
                                }
                              <div class="form-group form-button">
                                  <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
                              </div>
                          </form>
                          <div class="social-login">
                              <span class="social-label">Or login with</span>
                              <ul class="socials">
                                  <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"><FacebookIcon /></i></a></li>
                                  <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"><TwitterIcon /></i></a></li>
                                  <li><a href="#"><i class="display-flex-center zmdi zmdi-google"><GoogleIcon /></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </div><Footer /></>
  )
  
}
