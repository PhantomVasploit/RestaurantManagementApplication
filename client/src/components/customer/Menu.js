import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Navbar";
import { fetchMainCourseMeals } from "../../features/menu/mainCourse/mainCourse";
import CustomerCard from "./CustomerCard";

const Menu = ()=>{
    const dispatch = useDispatch()
    const mainCourseMeals = useSelector( (state)=>state.mainCourseMeals )
    useEffect(()=>{
        dispatch(fetchMainCourseMeals())
    }, [])

    return(
        <div className="menuPage">

            <div className="container-fluid">
                <div className="row searchSection border border-warning rounded-top justify-content-center align-items-center">
                    <Navbar />
                    <div className="searchBar justify-content-center align-items-center">
                        <h1 className="display-5 text-light text-center">Search For Your Favourite Meal</h1>
                        <div className="form-group d-flex justify-content-center">
                            <input type="text" className="form-control w-50 text-center" placeholder="Search Meal" />
                            <span className="input-group-text ms-2">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-cemter align-items center">
                    {
                        mainCourseMeals.mainCourseMeals.map((meal)=>(
                            <CustomerCard
                                className="mb-5"
                                meal = {meal}
                                key={meal._id}
                             />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Menu;