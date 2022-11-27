import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearJuice, fetchJuice } from "../../../features/menu/juice/juice";
import CustomerCard from "./CustomerCard";
import Navbar from "../Navbar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const Juice = ()=>{
    
    const dispatch = useDispatch()
    const juice = useSelector((state)=>state.juice)

    useEffect(()=>{
        dispatch(fetchJuice())
        return ()=>{
            dispatch(clearJuice())
        }
    }, [])
    
    return (
        <>
            {
                juice.loading && 
                <div className="loaderContainer">
                    <img src={require('../../../assets/loader.gif')} alt="loaderImage" />
                </div>
            }

            {
                juice.juice.length > 1 && 
                <div className="menuPage">
                   <Navbar />
                   <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu" className="btn btn-warning">Main Menu</Link>
                            <Link to="/customer/menu/hot-beverage" className="text-decoration-none lead text-dark">Hot Beverage</Link>
                        </div>
                        <h1>Juice<span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                juice.juice.map((meal)=>(
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
                juice.error && <APIConnectionError />
            }
        </>
    )
}

export default Juice;