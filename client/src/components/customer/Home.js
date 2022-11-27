import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./Navbar";
import LandingPage from "../general/LandingPage";
import { Link } from "react-router-dom";


const Home = ()=>{

    const customer = useSelector((state)=>state.customer)
    

    return (
        <>
            {
                !customer.email
                ?
                    <LandingPage />
                :
                <div className="customerHomePage">
                   <Navbar />
                   <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="welcomeNote col mt-5">
                                    <h1 className="display-6 text-light text-center"> Welcome Mr.{customer.lastName} </h1>
                                    <p className="lead text-light mt-5">
                                        We cordially invite you to a delectable feast of outstanding foods that will transport your taste buds to a gastronomic extravaganza. 
                                        We guarantee that dining at our restaurant will be a delightful experience and that you may choose from a wide variety of international cuisines.
                                    </p>
                                    <h1 className="display-6 mt-5 text-center text-light">Reservation</h1>
                                    <p className="lead text-light mt-2">
                                        Please book a table with us to enjoy the finest service the world has to offer.
                                    </p>
                                    <div className="text-center">
                                        <Link className="btn btn-outline-light" to='/customer/reservation'>Book a table</Link>
                                    </div>
                            </div>
                            <div className="col">
                                <div className="">
                                    <h1 className="display-5 text-center text-bold">COOX'S RESTAURANT</h1>
                                    <p className="fs-4 text-center">
                                    “Food for us comes from our relatives, whether they have wings or fins or roots. 
                                    That is how we consider food. Food has a culture. 
                                    It has a history. 
                                    It has a story. It has relationships.”
                                    – Winona LaDuke
                                    </p>
                                </div>
                                <div className="text-center mt-3">
                                    <Link className="btn btn-warning" to='/customer/menu'>Place an Order</Link>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            }
        </>
    )
}

export default Home;