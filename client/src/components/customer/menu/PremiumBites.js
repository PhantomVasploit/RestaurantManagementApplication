import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

import { clearPremiumBites, fetchPremiumBites } from "../../../features/menu/premiumBites/premiumBites";
import CustomerCard from "./CustomerCard";
import Navbar from "../Navbar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const PremiumBites = ()=>{

    const dispatch = useDispatch()
    const premiumBites = useSelector((state)=>state.premiumBites)

    useEffect(()=>{
        dispatch(fetchPremiumBites())
        return ()=>{
            dispatch(clearPremiumBites())
        }
    },[])

    return (
        <>
            {
                premiumBites.loading &&
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <Oval
                            height={80}
                            width={80}
                            color="#de6622"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#de6622"
                            strokeWidth={2}
                            strokeWidthSecondary={2}

                            />
                    </div>
                </div>
            }

            {
                premiumBites.premiumBites.length > 1 && 
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu/breakfast" className="text-decoration-none lead">Breakfast Bites</Link>
                            <Link to="/customer/menu/life-style" className="text-decoration-none lead">Life Style</Link>
                            <Link to="/customer/menu/main-course" className="text-decoration-none lead">Main Course</Link>
                        </div>
                        <h1>Premium Bites<span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                premiumBites.premiumBites.map((meal)=>(
                                    <CustomerCard 
                                    meal={meal}
                                    key={meal._id}
                                     />
                                ))
                            }
                        </div>
                    </section>
                </div>
            }

            {
                premiumBites.error && <APIConnectionError />
            }
        </>
    )

}

export default PremiumBites;