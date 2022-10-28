import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ()=>{
    return(
        <div className="errorPage">
            <div className="errorContainer">
                <h2 className="display-2">Opps! Something Went Wrong</h2>
                <h1 className="errorText"> 500 </h1>
                <p> Internal server error </p>
                <Link to="/" className="btn btn-warning">Go back home</Link>
            </div>
        </div>
    )

}

export default ErrorPage;