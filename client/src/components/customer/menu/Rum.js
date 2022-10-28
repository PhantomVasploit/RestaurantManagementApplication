import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { clearRum, fetchRum } from "../../../features/menu/rum/rum";
import { Link } from "react-router-dom";

import CustomerCard from "./CustomerCard";
import SearchBar from "./SearchBar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const Rum = ()=>{

    const dispatch = useDispatch()
    const rum = useSelector((state)=>state.rum)

    useEffect(()=>{
        dispatch(fetchRum())
        return ()=>{
            dispatch(clearRum())
        }
    }, [])

    return (
        <>

            {
                rum.loading && 
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
                rum.rum.length > 1 && 
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
                                            <Link className="text-decoration-none" to='/customer/menu/aperitif'>AperitifsAndBitters</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='customer/menu/beer'>Beer</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/bourbon'>BourbonAndTennessee</Link> 
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/champgne'>Champagne</Link> 
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/cider'>Cider</Link> 
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/cognac'>Cognac</Link> 
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/gin'>Gin</Link> 
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/white-wine'>White Wine</Link> 
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/red-wine'>Red Wine</Link> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-5 align-items-center d-flex justify-content-center menu">
                                {
                                    rum.rum.map((meal)=>(
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
                rum.error && <APIConnectionError />
            }

        </>
    )

}

export default Rum;