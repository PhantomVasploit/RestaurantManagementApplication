import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
                <div className="loaderContainer">
                    <img src={require('../../../assets/loader.gif')} alt="loaderImage" />
                </div>
             }    

            {
                mainCourseMeals.mainCourseMeals.length > 1 && 
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu" className="btn btn-warning">Main Menu</Link>
                            <Link to="/customer/menu/breakfast" className="text-decoration-none lead text-dark">Breakfast Bites</Link>
                            <Link to="/customer/menu/premium-bites" className="text-decoration-none lead text-dark">Premium Bites</Link>
                            <Link to="/customer/menu/life-style" className="text-decoration-none lead text-dark">Life Style</Link>
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