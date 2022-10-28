import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearMineralWater, fetchMineralWater } from "../../../features/menu/mineralWater/mineralWater";
import CustomerCard from "./CustomerCard";
import SearchBar from "./SearchBar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const MineralWater = ()=>{

    const dispatch = useDispatch()
    const mineralWater = useSelector((state)=>state.mineralWater)

    useEffect(()=>{
        dispatch(fetchMineralWater())
        return ()=>{
            dispatch(clearMineralWater())
        }
    }, [])

    return (
        <>
        
            {
                mineralWater.loading && 
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
                mineralWater.mineralWater.length > 1 && 
                <div className="menuPage">
                    <SearchBar />
                    <section id="menu" className="mt-5">
                        <div className="container-lg">
                            <div className="text-start">
                                <div className="menuTitle">
                                    <h2>Menu</h2>
                                    <p>Check Out Our Drinks Menu</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul className="menuFilters">
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/hot-beverage'>HotBeverage</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/juice'>Juice</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/aperitif'>Alcoholic Drinks</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-5 align-items-center d-flex justify-content-center menu">
                                {
                                    mineralWater.mineralWater.map((meal)=>(
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
                mineralWater.error && <APIConnectionError />
            }
        </>
    )

}

export default MineralWater;