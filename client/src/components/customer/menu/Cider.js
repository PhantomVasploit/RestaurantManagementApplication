import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearCider, fetchCider } from "../../../features/menu/cider/cider";
import CustomerCard from "./CustomerCard";
import Navbar from "../Navbar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const Cider = ()=>{
    
    const dispatch = useDispatch()
    const cider = useSelector((state)=>state.cider)

    useEffect(()=>{
        dispatch(fetchCider())
        return ()=>{
            dispatch(clearCider())
        }
    }, [])

    return (
        <>

            {
                cider.loading &&
                <div className="container">
                    <div className="row align-items-center justify-content-center">
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
                cider.cider.length > 1 && 
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu/aperitif" className="text-decoration-none lead">Aperitifs And Bitters</Link>
                            <Link to="/customer/menu/beer" className="text-decoration-none lead">Beer</Link>
                            <Link to="/customer/menu/bourbon" className="text-decoration-none lead">Bourbon And Tennessee</Link>
                            <Link to="/customer/menu/champagne" className="text-decoration-none lead">Champagne</Link>
                            <Link to="/customer/menu/cognac" className="text-decoration-none lead">Cognac</Link>
                            <Link to="/customer/menu/gin" className="text-decoration-none lead">Gin</Link>
                            <Link to="/customer/menu/red-wine" className="text-decoration-none lead">Red Wine</Link>
                            <Link to="/customer/menu/white-wine" className="text-decoration-none lead">White Wine</Link>
                            <Link to="/customer/menu/rum" className="text-decoration-none lead">Rum</Link>
                        </div>
                        <h1>Cider<span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                cider.cider.map((meal)=>(
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
                cider.error && <APIConnectionError />
            }

        </>
    )

}

export default Cider