import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCustomerReservations } from "../../features/customerReservations/customerReservations";

import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Dashboard = ()=>{

    const dispatch = useDispatch()
    const customerReservations = useSelector((state)=>state.customerReservations)
    const [date, setDate] = useState('')

    useEffect(()=>{
        dispatch(fetchCustomerReservations())
        setDate(new Date().toDateString())
    }, [])
    return(

        <>

            {
                customerReservations.loading &&
                <div className="loaderContainer">
                    <img src={require('../../assets/loader.gif')} alt="loaderImage" />
                </div>
            }

            {
                customerReservations.data.length >= 1
                ?
                    <div className="dashboard">
                        <Navbar />
                        <main>
                            <Sidebar />
                            <section className="middle">
                                <div className="header">
                                    <h1>Reservations</h1>
                                </div>
                                <p className="lead">{date}</p>
                                <table className="table table-striped mt-4">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Customer</th>
                                            <th>Meal Time</th>
                                            <th>Number Of Guests</th>
                                            <th>Meal</th>
                                            <th>View Ingredients</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            customerReservations.data.map((item)=>(
                                                <tr key={item._id}>
                                                    <td>{ item.customer }</td>
                                                    <td>{ item.reservationTime }</td>
                                                    <td>{ item.numberOfGuests }</td>
                                                    <td>
                                                        {
                                                            item.orders.map((order)=>(
                                                                <p>{ order.quantityOrdered } of { order.itemName }</p>
                                                            ))
                                                        }
                                                    </td>
                                                    <td><Link to='' className="btn btn-primary">Ingredients</Link></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </section>
                            <section className="right">

                            </section>
                        </main>
                    </div>
                :
                    <div className="dashboard">
                        <Navbar />
                        <main>
                            <Sidebar />
                            <section className="middle">
                                <div className="header">
                                    <h1>Reservations</h1>   
                                </div>
                                <p className="lead">{date}</p>

                                <div id="alert">
                                    <span class="reversed reversedRight">
                                        <span className="lead">
                                        &#9888;
                                        </span>
                                    </span>
                                    <span class="lead reversed reversedLeft">
                                        No orders made today!!
                                    </span> 
                                </div>

                            </section>
                            <section className="right">

                            </section>
                        </main>
                    </div>
            }

        </>
        
    )
}

export default Dashboard