import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearbourbonAndTenneessee, fetchBourbonAndTennessee } from "../../../features/menu/bourbonAndTennessee/bourbonAndTennessee";
import CustomerCard from "./CustomerCard";
import Navbar from "../Navbar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const BourbonAndTennessee = ()=>{

    const dispatch = useDispatch()
    const bourbonAndTennessee = useSelector((state)=>state.bourbonAndTennessee)

    useEffect(()=>{
        dispatch(fetchBourbonAndTennessee())
        return ()=>{
            dispatch(clearbourbonAndTenneessee())
        }
    }, [])

    return (
        <>
        
            {
                bourbonAndTennessee.loading &&
                <div className="loaderContainer">
                    <img src={require('../../../assets/loader.gif')} alt="loaderImage" />
                </div>
            }

            {
                bourbonAndTennessee.bourbonAndTennessee.length > 1 &&
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu" className="btn btn-warning">Main Menu</Link>
                            <Link to="/customer/menu/aperitif" className="text-decoration-none lead text-dark">Aperitifs And Bitters</Link>
                            <Link to="/customer/menu/beer" className="text-decoration-none lead text-dark">Beer</Link>
                            <Link to="/customer/menu/champagne" className="text-decoration-none lead text-dark">Champagne</Link>
                            <Link to="/customer/menu/cider" className="text-decoration-none lead text-dark">Cider</Link>
                            <Link to="/customer/menu/cognac" className="text-decoration-none lead text-dark">Cognac</Link>
                            <Link to="/customer/menu/red-wine" className="text-decoration-none lead text-dark">Red Wine</Link>
                            <Link to="/customer/menu/white-wine" className="text-decoration-none lead text-dark">White Wine</Link>
                            <Link to="/customer/menu/rum" className="text-decoration-none lead text-dark">Rum</Link>
                        </div>
                        <h1>Bourbon And Tennessee<span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                bourbonAndTennessee.bourbonAndTennessee.map((meal)=>(
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
                bourbonAndTennessee.error && <APIConnectionError />
            }

        </>
    )

}

export default BourbonAndTennessee;