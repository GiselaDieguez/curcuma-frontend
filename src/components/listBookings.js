import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { url } from '../api/api'
import HeaderUs from './headerUs'

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

    console.log(values);

    return (
        <>
            <HeaderUs />
            {
                loading ? (
                    <div>Cargando...</div>
                ) : (
                    <div className='container mt-5 shadowLog reservations'>
                        <div className="list-group">
                            {values === undefined ||
                                (values[0].date_res ||
                                    values[0].time_res ||
                                    values[0].name_prov ||
                                    values[0].tel_prov ||
                                    values[0].mail_prov ||
                                    values[0].adress_prov
                                ) === null ? (
                                <div>No reservations yet.</div>
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
