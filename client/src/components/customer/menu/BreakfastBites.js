import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import { clearBreakfastBites, fetchBreakfastBites } from "../../../features/menu/breakfastBites/breakfastBites";
import CustomerCard from "./CustomerCard";
import APIConnectionError from "../../general/APIConnectionErrorPage";
import Navbar from "../Navbar";



const BreakfastBites = ()=>{
    const dispatch = useDispatch()
    const breakfastBites = useSelector((state)=>state.breakfastBites)

    useEffect(()=>{
        dispatch(fetchBreakfastBites())
        return ()=>{
            dispatch(clearBreakfastBites())
        }
    }, [])

    return (
        <>
            { breakfastBites.loading && 
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

            { breakfastBites.breakfastBites.length > 1 && 
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu/main-course" className="text-decoration-none lead text-dark">Main Course</Link>
                            <Link to="/customer/menu/premium-bites" className="text-decoration-none lead text-dark">Premium Bites</Link>
                            <Link to="/customer/menu/life-style" className="text-decoration-none lead text-dark">Life Style</Link>
                        </div>
                        <h1>Breakfast <span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                breakfastBites.breakfastBites.map((meal)=>(
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
                breakfastBites.error && <APIConnectionError />
            }
        </>
    )
}

export default BreakfastBites;