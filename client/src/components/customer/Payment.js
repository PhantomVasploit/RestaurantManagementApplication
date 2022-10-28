import React from "react";
import { useSelector } from "react-redux";

const Payment = ()=>{
    const customer = useSelector((state)=>state.customer)
    return (
        <div className="paymentPage">
            <h1 className="display-4 text-light">Choose mode of payemnt</h1>
            <div className="paymentContainer">
                <div className="row justify-content-center align-items-center">
                    <div className="col">
                        <div className="text-center">
                            <h3 className="lead text-primary mt-5">PAYPAL</h3>
                            <p className="text-center mt-4 ms-5">
                                {customer.firstName}, do you use PayPal?
                                Is this your go-to method of making payments online? Don't worry; we have your best interests in mind. 
                                For a safer and more comfortable experience, use PayPal to pay for the table reservation since it has been integrated into our system.
                            </p>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn btn-primary" > Pay With Paypal </button>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="text-center">
                            <h3 className="lead text-success text-center mt-5">MPESA</h3>
                            <p className="text-center mt-4 me-5">
                                Mr. {customer.lastName} are you a subscriber to Safaricom's internet service?
                                Is M-PESA your go-to choice for making purchases of products and services? 
                                We've got you covered, so don't worry. 
                                To make it convenient for you to pay for your table bookings, we've integrated the mpesa system with our own.
                            </p>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn btn-success" > Pay With M-Pesa </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment