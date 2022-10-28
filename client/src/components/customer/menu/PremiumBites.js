import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

import { clearPremiumBites, fetchPremiumBites } from "../../../features/menu/premiumBites/premiumBites";
import CustomerCard from "./CustomerCard";
import SearchBar from "./SearchBar";
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
                    <SearchBar />
                    <section id="menu" className="mt-5">
                        <div className="container-lg">
                            <div className="text-start">
                                <div className="menuTitle">
                                    <h2>Menu</h2>
                                    <p>Check Out Our Tatsty Menu</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul className="menuFilters">
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/breakfast'>BreakfastBites</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/life-style'>LifeStyle</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/main-course'>MainCourse</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/hot-beverage'>Drinks</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-5 align-items-center d-flex justify-content-center menu">
                                {
                                    premiumBites.premiumBites.map((meal)=>(
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
                premiumBites.error && <APIConnectionError />
            }
        </>
    )

}

export default PremiumBites;