import React, { useEffect } from "react";
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
                <div className="loaderContainer">
                    <img src={require('../../../assets/loader.gif')} alt="loaderImage" />
                </div>
            }

            {
                rum.rum.length > 1 && 
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu" className="btn btn-warning">Main Menu</Link>
                            <Link to="/customer/menu/beer" className="text-decoration-none lead text-dark">Beer</Link>
                            <Link to="/customer/menu/bourbon" className="text-decoration-none lead text-dark">Bourbon And Tennessee</Link>
                            <Link to="/customer/menu/champagne" className="text-decoration-none lead text-dark">Champagne</Link>
                            <Link to="/customer/menu/cider" className="text-decoration-none lead text-dark">Cider</Link>
                            <Link to="/customer/menu/cognac" className="text-decoration-none lead text-dark">Cognac</Link>
                            <Link to="/customer/menu/gin" className="text-decoration-none lead text-dark">Gin</Link>
                            <Link to="/customer/menu/red-wine" className="text-decoration-none lead text-dark">Red Wine</Link>
                            <Link to="/customer/menu/white-wine" className="text-decoration-none lead text-dark">White Wine</Link>
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