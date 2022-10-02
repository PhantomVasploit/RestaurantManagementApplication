import React from "react";
import { Link } from "react-router-dom";

const Error404 = ()=>{
    return(
        <div className="errorPage">
            <div className="errorContainer">
                <h2 className="display-2">Opps! Page Not Found</h2>
                <h1 className="errorText"> 404 </h1>
                <p> We can't find the page you're looking for </p>
                <Link to="/" className="btn btn-warning">Go back home</Link>
            </div>
        </div>
    )

}

export default Error404;