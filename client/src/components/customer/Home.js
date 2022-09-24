import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./Navbar";
import LandingPage from "../general/LandingPage";


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
                                    <p className="lead text-light"></p>
                            </div>
                            <div className="col">

                            </div>
                        </div>
                   </div>
                </div>
            }
        </>
    )
}

export default Home;