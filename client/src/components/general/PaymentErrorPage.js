import React from "react";
import { Link } from "react-router-dom";

const PaymentErrorPage = ()=>{
    return(
        <div className="errorPage">
            <div className="errorContainer">
                <h2 className="display-2"> PAYMENT SERVICE DOWN </h2>
                <p className="apiErrorText">  Network Error </p>
                <p> Please try again later or try an alternative payemnt option. Thank you! </p>
                <Link to="/customer/payment" className="btn btn-warning">Go back home</Link>
            </div>
        </div>
    )

}

export default PaymentErrorPage;