import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearGin, fetchGin } from "../../../features/menu/gin/gin";
import CustomerCard from "./CustomerCard";
import SearchBar from "./SearchBar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const Gin = ()=>{

    const dispatch = useDispatch()
    const gin = useSelector((state)=>state.gin)

    useEffect(()=>{
        dispatch(fetchGin())
        return ()=>{
            dispatch(clearGin())
        }
    }, [])

    return (
        <>

            {
                gin.loading && 
                <div className="container">
                    <div className="row justifiy-content-center align-items-center">
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
                gin.gin.length > 1 && 
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
                                            <Link className="text-decoration-none" to='/customer/menu/red-wine'>Red Wine</Link> 
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/white-wine'>White Wine</Link> 
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to='/customer/menu/rum'>Rum</Link> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-5 align-items-center d-flex justify-content-center menu">
                                {
                                    gin.gin.map((meal)=>(
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
                gin.error && <APIConnectionError />
            }

        </>
    )

}

export default Gin;