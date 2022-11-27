import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearHotBeverage, fetchHotBeverage } from "../../../features/menu/hotBeverage/hotBeverage";
import CustomerCard from "./CustomerCard";
import Navbar from "../Navbar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const HotBeverage = ()=>{
    
    const dispatch = useDispatch()
    const hotBeverage = useSelector((state)=>state.hotBeverage)

    useEffect(()=>{
        dispatch(fetchHotBeverage())
        return ()=>{
            dispatch(clearHotBeverage())
        }
    },[])

    return (
        <>
            {
                hotBeverage.loading &&
                <div className="loaderContainer">
                    <img src={require('../../../assets/loader.gif')} alt="loaderImage" />
                </div>
            }

            {
                hotBeverage.hotBeverage.length > 1 && 
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu" className="btn btn-warning">Main Menu</Link>
                            <Link to="/customer/menu/juice" className="text-decoration-none lead text-dark">Juice</Link>
                        </div>
                        <h1>Hot Beverage<span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                hotBeverage.hotBeverage.map((meal)=>(
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
                hotBeverage.error && <APIConnectionError />
            }
            
        </>
    )

}

export default HotBeverage;