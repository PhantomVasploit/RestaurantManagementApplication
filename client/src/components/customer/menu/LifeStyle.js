import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearLifeStyle, fetchLifeStyle } from "../../../features/menu/lifeStyle/lifeStyle";
import CustomerCard from "./CustomerCard";
import Navbar from "../Navbar";
import APIConnectionError from "../../general/APIConnectionErrorPage";

const LifeStyle = ()=>{

    const dispatch = useDispatch()
    const lifeStyle = useSelector((state)=>state.lifeStyle)

    useEffect(()=>{
        dispatch(fetchLifeStyle())
        return ()=>{
            dispatch(clearLifeStyle())
        }
    }, [])

    return (
        <>
            {
                lifeStyle.loading &&
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
                lifeStyle.lifeStyle.length > 1 && 
                <div className="menuPage">
                    <Navbar />
                    <section className="menuContainer">
                        <div className="menuTabs">
                            <Link to="/customer/menu/breakfast" className="text-decoration-none lead">Breakfast Bites</Link>
                            <Link to="/customer/menu/premium-bites" className="text-decoration-none lead">Premium Bites</Link>
                            <Link to="/customer/menu/main-course" className="text-decoration-none lead">Main Course</Link>
                        </div>
                        <h1>Life Style<span> Menu</span> </h1>
                        <div className="boxContainer">
                            {
                                lifeStyle.lifeStyle.map((meal)=>(
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
                lifeStyle.error && <APIConnectionError />
            }
        </>
    )
}

export default LifeStyle;