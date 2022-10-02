import React from "react";
import { Link } from "react-router-dom";

const APIConnectionError = ()=>{
    return(
        <div className="errorPage">
            <div className="errorContainer">
                <h2 className="display-2"> UNABLE TO CONNECT TO THE API SERVER </h2>
                <p className="apiErrorText">  Network Error </p>
                <p> Please check your connection! </p>
                <Link to="/" className="btn btn-warning">Go back home</Link>
            </div>
        </div>
    )

}

export default APIConnectionError;