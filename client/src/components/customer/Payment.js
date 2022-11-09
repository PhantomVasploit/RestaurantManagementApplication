import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = ()=>{
    
    const navigate = useNavigate()
    const customer = useSelector((state)=>state.customer)
    const authAxios = axios.create({
        headers: {
            authorization: `Bearer ${customer.authenticationToken}`
        }
    })
    const mpesaPayment = async ()=>{
        await authAxios.post('https://89b3-154-159-237-212.in.ngrok.io/api/payment/mpesa/stk-push')
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
                            <p className="text-center ms-5">
                                {customer.firstName}, do you use PayPal?
                                Is this your go-to method of making payments online? Don't worry; we have your best interests in mind. 
                                For a safer and more comfortable experience, use PayPal to pay for the table reservation since it has been integrated into our system.
                            </p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" onClick={()=>{ paypalPayment() }} > Pay With Paypal </button>
                        </div>
                    </div>
                </div>

                <div className="overlayContainer">
                    <div className="overlay">
                        <div className="mpesa">
                            <h3 className="text-center"><img src={require('../../assets/mpesa.jpg')} alt="paypal" height="160px" width="160px"/></h3>
                            <p className="text-center me-5">
                                    Mr. {customer.lastName} are you a subscriber to Safaricom's internet service?
                                    Is M-PESA your go-to choice for making purchases of products and services? 
                                    We've got you covered, so don't worry. 
                                    To make it convenient for you to pay for your table bookings, we've integrated the mpesa system with our own.
                            </p>
                            <div className="d-flex justify-content-center ">
                                <button className="btn btn-success" onClick={()=>{ mpesaPayment() }} > Pay With M-Pesa </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment