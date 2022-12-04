import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { clearOrders } from "../../features/orders/order";
import { cancelReservation } from "../../features/reservation/reservation";

const Payment = ()=>{
    
    const navigate = useNavigate()
    const customer = useSelector((state)=>state.customer)
    const dispatch = useDispatch()
    const {state} = useLocation()
    console.log(state)
    const requestOptions = {
        body: state.totalCost
    }
    const authAxios = axios.create({
        headers: {
            authorization: `Bearer ${customer.authenticationToken}`
        }
    })
    const mpesaPayment = async ()=>{
        await authAxios.post('https://coox-restaurant-mpesa-service.herokuapp.com/api/payment/mpesa/stk-push', requestOptions)
        .then((response)=>{
            navigate('/customer/home')
        })
        .catch((e)=>{
            console.log(e.message)
            navigate('/customer/payment/error')
        })
    }

    const paypalPayment = async ()=>{
        await authAxios.post('http://127.0.0.1:5006/api/payment/paypal/pay')
        .then((response)=>{
            !response.data ? navigate('/customer/payment/error') : window.location.assign(response.data.redirectUrl)
        })
        .catch((e)=>{
            console.log(e.message)
            navigate('/customer/payment/error')
        })
    }

    return (
        <div className="paymentPage">
            <h1 className="display-4">Choose mode of payemnt</h1>
            <div className="paymentContainer">

                <div className="paymentDetailsContainer paypalContainer">
                    <div className="paypal">
                        <h3 className="text-center"><img src={require('../../assets/paypal.png')} alt="paypal" height="150px" width="150px"/></h3>
                            
                        <div className="d-flex justify-content-center">
                            <button 
                                className="btn btn-primary" 
                                onClick={()=>{ 
                                    paypalPayment()
                                    dispatch(clearOrders())
                                    dispatch(cancelReservation()) 
                                }} 
                            > Pay With Paypal </button>
                        </div>
                    </div>
                </div>

                <div className="paymentDetailsContainer mpesaContainer">
                    <div className="mpesa">
                        <h3 className="text-center"><img src={require('../../assets/mpesa.jpg')} alt="paypal" height="160px" width="160px"/></h3>
                        
                        <div className="d-flex justify-content-center ">
                            <button 
                                className="btn btn-success" 
                                onClick={()=>{ 
                                    mpesaPayment()
                                    dispatch(clearOrders())
                                    dispatch(cancelReservation()) 
                                }} 
                            > Pay With M-Pesa </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment