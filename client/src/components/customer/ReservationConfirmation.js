import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import UserIcon from '@material-ui/icons/Person';
import CalenderIcon from '@material-ui/icons/CalendarToday';
import TimeIcon from '@material-ui/icons/Timer';
import UsersIcon from '@material-ui/icons/PeopleAlt';
import LocationIcon from '@material-ui/icons/LocationOn'
import FoodIcon from '@material-ui/icons/LocalPizza'

import { cancelReservation } from "../../features/reservation/reservation";
import { clearOrders } from "../../features/orders/order";


const ReservationConfirmation = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const customer = useSelector((state)=>state.customer)
    const reservation = useSelector((state)=>state.reservation)
    const orders = useSelector((state)=>state.orders)
    const {state} = useLocation()
    const totalCost = state.totalCost

    const saveReservation = async ()=>{
        
        const data = {
            customer: customer.email,
            reservationDate: reservation.reservationDate,
            reservationTime: reservation.reservationTime,
            numberOfGuests: reservation.numberOfGuests,
            orders: [...orders.orders]
        }

        console.log(JSON.stringify(data))
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

        await axios.post('http://127.0.0.1:5005/api/reservations', requestOptions)
        .then((response)=>{
            navigate('/customer/payment', {state: {totalCost}})
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
                                <UserIcon/>
                                <span className="ms-4 lead">{ customer.firstName} {customer.lastName} </span>
                            </div>
                            <div className="mt-4">
                                <CalenderIcon />
                                <span className="ms-4 lead">
                                    { reservation.reservationDate } 
                                </span>
                            </div>
                            <div className="mt-4">
                                <TimeIcon/>
                                <span className="ms-4 lead">{ reservation.reservationTime } HRS</span>
                            </div>
                            <div className="mt-4">
                                <UsersIcon />
                                <span className="ms-4 lead">{reservation.numberOfGuests}</span>
                            </div>
                            <div className="mt-4">
                                <LocationIcon />
                                <span className="ms-4 lead">NAKURU KENYA</span>
                            </div>
                            <div className="mt-4">
                                <FoodIcon />
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