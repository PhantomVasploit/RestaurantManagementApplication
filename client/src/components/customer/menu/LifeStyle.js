import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearLifeStyle, fetchLifeStyle } from "../../../features/menu/lifeStyle/lifeStyle";
import CustomerCard from "./CustomerCard";
import SearchBar from "./SearchBar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const LifeStyle = ()=>{

    const dispatch = useDispatch()
    const lifeStyle = useSelector((state)=>state.lifeStyle)

    useEffect(()=>{
        dispatch(fetchLifeStyle())
        return ()=>{
            dispatch(clearLifeStyle())
        }
    }, [])

    return (
        <>
            {
                lifeStyle.loading &&
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
                lifeStyle.lifeStyle.length > 1 && 
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
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul className="menuFilters">
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/breakfast'>BreakfastBites</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/main-course'>MainCourse</Link>
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
                                    lifeStyle.lifeStyle.map((meal)=>(
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
                lifeStyle.error && <APIConnectionError />
            }
        </>
    )
}

export default LifeStyle;