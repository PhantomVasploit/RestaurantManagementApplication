import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUserAlt, faUtensils, faClock, faCalendarAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { cancelReservation } from "../../features/reservation/reservation";
import { clearOrders } from "../../features/orders/order";

const ReservationConfirmation = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const customer = useSelector((state)=>state.customer)
    const reservation = useSelector((state)=>state.reservation)
    const orders = useSelector((state)=>state.orders)

    const saveReservation = async ()=>{
        
        const data = {
            customer: customer.phoneNumber,
            reservationDate: reservation.reservationDate,
            reservationTime: reservation.reservationTime,
            numberOfGuests: reservation.numberOfGuests,
            orders: [...orders.orders]
        }
        // console.log(JSON.stringify(orders.orders))
        const requestOptions = {
            headers: {
                "Acess-Controll-Allow-Origin": "*",
                "Content-Type": "application/json;charset=UTF-8",
                "accept":"application/json",
                "authorization": `Bearer ${customer.authenticationToken}`
            },
            body: data
        }

        console.log(JSON.stringify(data.orders))

        await axios.post('http://127.0.0.1:5005/api/reservations', requestOptions)
        .then((response)=>{
            navigate('/customer/payment')
        })
        .catch((e)=>{
            navigate('/error')
        })
        
    }

    return(
        <>

            <div className="ticketPage">
                <h1 className="display-4 ">Confirm Reservation</h1>
                <div className="ticketContainer">
                    <div className="row justify-content-center align-items-center">

                        <div className="col text-center mt-5 ">
                            <h2 className="lead">{customer.firstName} {customer.lastName}'s</h2>
                            <h2 className="lead">Reservation</h2>
                        </div>

                        <div className="col">
                            <p className="lead mt-4">NAKURU, KENYA</p>
                            <h3 className="">COOX'S RESTAURANT</h3>
                            <div className="mt-4">
                                <FontAwesomeIcon icon={faUserAlt} />
                                <span className="ms-4 lead">{ customer.firstName} {customer.lastName} </span>
                            </div>
                            <div className="mt-4">
                                <FontAwesomeIcon icon={ faCalendarAlt } />
                                <span className="ms-4 lead">
                                    { reservation.reservationDate } 
                                </span>
                            </div>
                            <div className="mt-4">
                                <FontAwesomeIcon icon={faClock} />
                                <span className="ms-4 lead">{ reservation.reservationTime } HRS</span>
                            </div>
                            <div className="mt-4">
                                <FontAwesomeIcon icon={faUsers}/>
                                <span className="ms-4 lead">{reservation.numberOfGuests}</span>
                            </div>
                            <div className="mt-4">
                                <FontAwesomeIcon icon={ faMapMarkerAlt } />
                                <span className="ms-4 lead">NAKURU KENYA</span>
                            </div>
                            <div className="mt-4">
                                <FontAwesomeIcon icon={faUtensils} />
                                {
                                    orders.orders.map((meal)=>(
                                        <p className="lead ms-4" key={meal.itemName}>{ meal.quantityOrdered } { meal.itemName } </p>
                                    ))
                                }
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <button 
                                        className="btn btn-success"
                                        onClick={()=>{
                                            saveReservation()
                                        }}
                                    >Confirm Reservation</button>
                                </div>
                                <div className="col">
                                    <Link 
                                        to='/customer/home' 
                                        className="btn btn-danger"
                                        onClick={()=>{
                                            dispatch(cancelReservation())
                                            dispatch(clearOrders())
                                        }}
                                    >Cancel Reservation</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReservationConfirmation