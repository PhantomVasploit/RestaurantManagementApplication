import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUserAlt, faUtensils, faClock, faCalendarAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { cancelReservation } from "../../features/reservation/reservation";
import { clearOrders } from "../../features/orders/order";

const ReservationConfirmation = ()=>{

    const dispatch = useDispatch()
    const customer = useSelector((state)=>state.customer)
    const reservation = useSelector((state)=>state.reservation)
    const orders = useSelector((state)=>state.orders)

    return(
        <>

            <div className="ticketPage">
                <h1 className="display-4 text-light">Confirm Reservation</h1>
                <div className="ticketContainer">
                    <div className="row justify-content-center align-items-center">

                        <div className="col text-center mt-5">
                            <h2 className="display-5">14</h2>
                            <h2 className="lead">FEB</h2>
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
                                        <p className="lead ms-4" key={meal.name}>{ meal.quantity } plate of { meal.name } </p>
                                    ))
                                }
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <Link to='/customer/payment' className="btn btn-success">Confirm Reservation</Link>
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