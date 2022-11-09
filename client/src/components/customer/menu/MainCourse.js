import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

import CustomerCard from "./CustomerCard";
import { clearMainCourseMeals, fetchMainCourseMeals } from "../../../features/menu/mainCourse/mainCourse";
import Navbar from "../Navbar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const MainCourse = ()=>{
    const dispatch = useDispatch()
    const mainCourseMeals = useSelector( (state)=>state.mainCourseMeals )

    useEffect(()=>{
        dispatch(fetchMainCourseMeals())
        return ()=>{
            dispatch(clearMainCourseMeals())
        }
    }, [])

    return(
        <>
            { 
                mainCourseMeals.loading &&
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
                mainCourseMeals.mainCourseMeals.length > 1 && 
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu/breakfast" className="text-decoration-none lead">Breakfast Bites</Link>
                            <Link to="/customer/menu/premium-bites" className="text-decoration-none lead">Premium Bites</Link>
                            <Link to="/customer/menu/life-style" className="text-decoration-none lead">Life Style</Link>
                        </div>
                        <h1>Main Course <span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                mainCourseMeals.mainCourseMeals.map((meal)=>(
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
                mainCourseMeals.error && <APIConnectionError />
            }
        </>   
    )
}

export default MainCourse;