import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearBeer, fetchBeer } from "../../../features/menu/beer/beer";
import CustomerCard from "./CustomerCard";
import Navbar from "../Navbar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const Beer = ()=>{

    const dispatch = useDispatch()
    const beer = useSelector((state)=>state.beer)

    useEffect(()=>{
        dispatch(fetchBeer())
        return ()=>{
            dispatch(clearBeer())
        }
    }, [])

    return (
        <>
            {
                beer.loading && 
                <div className="loaderContainer">
                    <img src={require('../../../assets/loader.gif')} alt="loaderImage" />
                </div>
            }

            {
                beer.beer.length > 1 &&
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu" className="btn btn-warning">Main Menu</Link>
                            <Link to="/customer/menu/aperitif" className="text-decoration-none lead text-dark">Aperitifs And Bitters</Link>
                            <Link to="/customer/menu/bourbon" className="text-decoration-none lead text-dark">Bourbon And Tennessee</Link>
                            <Link to="/customer/menu/champagne" className="text-decoration-none lead text-dark">Champagne</Link>
                            <Link to="/customer/menu/cider" className="text-decoration-none lead text-dark">Cider</Link>
                            <Link to="/customer/menu/cognac" className="text-decoration-none lead text-dark">Cognac</Link>
                            <Link to="/customer/menu/gin" className="text-decoration-none lead text-dark">Gin</Link>
                            <Link to="/customer/menu/red-wine" className="text-decoration-none lead text-dark">Red Wine</Link>
                            <Link to="/customer/menu/white-wine" className="text-decoration-none lead text-dark">White Wine</Link>
                            <Link to="/customer/menu/rum" className="text-decoration-none lead text-dark">Rum</Link>
                        </div>
                        <h1>Beer<span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                beer.beer.map((meal)=>(
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
                beer.error && <APIConnectionError />
            }

        </>
    )

}

export default Beer;