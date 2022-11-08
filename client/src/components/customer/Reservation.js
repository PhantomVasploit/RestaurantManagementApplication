import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css'
import { Link } from "react-router-dom";


import { createReservation, cancelReservation } from "../../features/reservation/reservation";

const Reservation = ()=>{

    const dispatch = useDispatch()
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    let [numberOfGuests, setNumberOfGuests] = useState(1)
    const customer = useSelector((state)=>state.customer)
    const reservation = useSelector((state)=>state.reservation)

    return(
        <>
            <div className="reservationPage">
                
                <h2 className="border-bottom display-4 mb-4 text-center mt-4 text-light">Make Reservation</h2>
                <div className="reservationContainer">
                    <div className="sideContainer dateTimePickerContainer">
                        <div className="dateTimePicker">
                            <div>
                                <div>
                                    <h2 className="lead">Select Date</h2>
                                    <Calendar 
                                        className="calender" 
                                        value={date} 
                                        onChange={setDate} 
                                    />
                                </div>
                                <div className="mt-3 text-dark">
                                    <h2 className="lead">Select Time</h2>
                                    <TimePicker className="text-dark" value={time} onChange={setTime}/>
                                </div>
                                <div className="mt-3 text-dark">
                                    <h2 className="lead">Number of Guests</h2>
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col">
                                            <button 
                                            className="btn btn-warning"
                                            onClick={()=>{
                                                return numberOfGuests > 1 ? setNumberOfGuests(numberOfGuests-=1) : numberOfGuests
                                            }}
                                            >-</button>
                                        </div>
                                        <div className="col lead text-dark">
                                            {numberOfGuests}
                                        </div>
                                        <div className="col">
                                            <button 
                                            className="btn btn-warning"
                                            onClick={()=>{
                                                setNumberOfGuests(numberOfGuests+=1)
                                            }}
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 justify-content-center">
                                    <Link 
                                        to='/customer/menu/breakfast'
                                        className="btn btn-warning"
                                        onClick={()=>{
                                            dispatch(cancelReservation())
                                            dispatch(createReservation({ customer: customer.phoneNumber, reservationDate: date.toDateString(), reservationTime: time, numberOfGuests }))
                                            console.log(JSON.stringify(reservation))
                                        }}
                                    >Proceed To Menu</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlayContainer">
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservation