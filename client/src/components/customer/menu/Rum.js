import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { clearRum, fetchRum } from "../../../features/menu/rum/rum";
import { Link } from "react-router-dom";

import CustomerCard from "./CustomerCard";
import Navbar from "../Navbar";
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
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu/beer" className="text-decoration-none lead">Beer</Link>
                            <Link to="/customer/menu/bourbon" className="text-decoration-none lead">Bourbon And Tennessee</Link>
                            <Link to="/customer/menu/champagne" className="text-decoration-none lead">Champagne</Link>
                            <Link to="/customer/menu/cider" className="text-decoration-none lead">Cider</Link>
                            <Link to="/customer/menu/cognac" className="text-decoration-none lead">Cognac</Link>
                            <Link to="/customer/menu/gin" className="text-decoration-none lead">Gin</Link>
                            <Link to="/customer/menu/red-wine" className="text-decoration-none lead">Red Wine</Link>
                            <Link to="/customer/menu/white-wine" className="text-decoration-none lead">White Wine</Link>
                        </div>
                        <h1>Rum<span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                rum.rum.map((meal)=>(
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
                rum.error && <APIConnectionError />
            }

        </>
    )

}

export default Rum;