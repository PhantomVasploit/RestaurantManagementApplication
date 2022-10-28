import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

import CustomerCard from "./CustomerCard";
import SearchBar from "./SearchBar";
import { clearMainCourseMeals, fetchMainCourseMeals } from "../../../features/menu/mainCourse/mainCourse";
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
                    <SearchBar />
                    <section id="menu" className="mt-5">
                        <div className="container-lg">
                            <div className="text-start">
                                <div className="menuTitle">
                                    <h2>Menu</h2>
                                    <p>Check Out Our Tasty Menu</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="menuFilters">
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/breakfast'>BreakfastBites</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/life-style'>LifeStyle</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/premium-bites'>PremiumBites</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/hot-beverage'>Drinks</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-5 align-items-center d-flex justify-content-center menu">
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