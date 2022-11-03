import React, { useEffect, useState } from 'react'
import { url } from '../api/api'
import HeaderUs from './headerUs'
import vine from '../imagenes/wine.gif'

export const ListBookings = () => {
    const [values, setValues] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${url}/list/bookings`)
            .then((response) => response.json())
            .then((res) => {
                setValues(res);
                setLoading(false);
            });
    }, [loading]);

    return (
        <>
            <HeaderUs />
            {
                loading ? (
                    <img src={vine} class="vineImg" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-30%, -30%)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px 0px',
                        margin: '50px 0px',
                        width: '200px',
                        height: 'auto'
                    }}></img>
                ) : (
                    <div className='container mt-5 shadowLog reservations'>
                        <div className="list-group">
                            {!values[0] ? (
                                <a>No reservations yet.</a>
                            ) : (
                                values.map((booking, index) => (
                                    <><a href="#" className="list-group-item list-group-item-action" aria-current="true" key={index}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{booking.name_prov}</h5>
                                            <h6>{booking.date_res.slice(0, -14)}</h6>
                                        </div>
                                        <p className="mb-1">Hour: {booking.time_res.slice(0, -3)}</p>
                                        <p className="mb-1">Adress: {booking.adress_prov}</p>
                                        <p>Telephone: {booking.tel_prov}</p>
                                        <div className="d-flex w-100 justify-content-end">                                        
                                        <button type="button" class="btn btn-outline-warning" style={{marginRight: "6px"}}>Modify</button>
                                        <button type="button" class="btn btn-outline-danger">Cancel</button>
                                        </div>
                                        <div class="linea"></div>
                                    </a></>
                                ))
                            )
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}
