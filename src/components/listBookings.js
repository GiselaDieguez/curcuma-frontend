import React, { useEffect, useState } from 'react'
import { url } from '../api/api'
import Header from './header'

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
            <Header />
            {
                loading ? (
                    <div>Cargando...</div>
                ) : (
                    <div className='container mt-5'>
                        <div className="list-group">
                            {values === undefined ||
                                (values[0].date_res ||
                                    values[0].time_res ||
                                    values[0].name_prov ||
                                    values[0].tel_prov ||
                                    values[0].mail_prov ||
                                    values[0].adress_prov
                                ) === null ? (
                                <div>Todavía no hay reservas</div>
                            ) : (
                                values.map((booking, index) => (
                                    <a href="#" className="list-group-item list-group-item-action" aria-current="true" key={index}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{booking.name_prov}</h5>
                                            <small>{booking.date_res.slice(0, -14)}</small>
                                        </div>
                                        <p className="mb-1">{booking.time_res}</p>
                                        <small>{booking.tel_prov}</small>
                                    </a>
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
