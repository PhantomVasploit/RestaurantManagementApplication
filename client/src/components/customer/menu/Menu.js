import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";


import Navbar from "../Navbar";
import { fetchMainCourseMeals } from "../../../features/menu/mainCourse/mainCourse";
import CustomerCard from "./CustomerCard";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const Menu = ()=>{
    const dispatch = useDispatch()
    const mainCourseMeals = useSelector( (state)=>state.mainCourseMeals )

    useEffect(()=>{
        dispatch(fetchMainCourseMeals())
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
                mainCourseMeals.mainCourseMeals.length > 0 &&
                <div className="menuPage">
                    <section id="searchContainer">
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
                    </section>

                    <section id="menu" className="mt-5">
                        <div className="container-lg">
                            <div className="text-center">
                                <h1 className="display-5 text-center text-light mb-5 menu-heading"> Our <span className="text-dark">Menu</span></h1>
                            </div>

                            <div className="bloc-tabs">
                                <button className="btn btn-outline-warning">Tab 1</button>
                            </div>
                            <div className="content-tabs">
                                <div></div>
                                <div className="row mt-5 align-items-center d-flex justify-content-around">
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
                    </section>
                </div>
            }

            {
                mainCourseMeals.error && 
                <APIConnectionError />
            }

        </>
    )
}

export default Menu;