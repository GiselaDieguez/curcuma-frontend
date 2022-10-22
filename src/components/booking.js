import React, { useEffect, useState } from 'react'
import './styles/styles.css'
import booking from '../imagenes/booking.jpg'
import { createBooking, url } from '../api/api'
import { Footer } from './footer'
import { useSelector } from 'react-redux'
import { selectTurn } from '../redux/slices/turnSlice'
import Header from './header'

export const Booking = () => {
    const state = useSelector(selectTurn);
    const [first, setFirst] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [values, setValues] = useState({
        date_res: "",
        time_res: "",
        state_res: "Y",
        prov_id: state,
        user_id: "4"
    })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        fetch(`${url}/prov/${state}`)
        .then((response) => response.json())
        .then((res) => {
            setFirst(res);
        setIsLoading(false) 
        });
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await createBooking(values)
            setError('')
            setSuccess(data.message)
            setValues({
                date_res: "",
                time_res: "",
                state_res: "Y",
                prov_id: "",
                user_id: "4"
            })
        } catch (error) {
            setError(error.response.data.errors[0].msg)
            setSuccess('')
        }
    }
    return (
        <>
        <Header />
        {
            isLoading ? (
                <div>Cargando</div>
                ): 
                (
                <div className="main">
                    <section className="signup login">
                        <div className="container" style={{width:"900px"}}>
                            <div className="signup-content">
                                <div className="signup-form">
                                    <h2 className="form-title">Booking</h2>
                                    <form className="booking-form" id="booking-form" onSubmit={(e) => onSubmit(e)}>
                                        <div className="form-group">
                                            <label for="date"><i className="zmdi zmdi-account"></i></label>
                                            <input onChange={(e) => onChange(e)} type="date" value={values.date_res} name="date_res" id="date_res" placeholder="Your Date" autoComplete="off" min="2022-10-22" max="2023-01-01" required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="time"><i className="zmdi zmdi-account"></i></label>
                                            <input onChange={(e) => onChange(e)} type="time" value={values.time_res} name="time_res" id="time_res" placeholder="Hour" autoComplete="off" required/>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => onChange(e)} type="text" value={first.name_prov} name="prov_id" id="prov_id" placeholder="Proov"  disabled/>
                                        </div>
                                        {
                                            error && <p style={{color: "red"}}>{error}</p>
                                        }
                                        {
                                            success && <p style={{color: "green"}}>{success}</p>
                                        }
                                        <div className="form-group form-button" style={{paddingBottom:"10px"}}>
                                            <input type="submit" name="booking" id="booking" className="form-submit" value="Generate" />
                                        </div>
                                    </form>
                                </div>
                                <div className="signup-image">
                                    <figure><img src={booking} alt="booking image" /></figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
                )
        }
        </>
    )
};