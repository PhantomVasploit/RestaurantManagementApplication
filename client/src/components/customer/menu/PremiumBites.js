import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

import { fetchPremiumBites } from "../../../features/menu/premiumBites/premiumBites";
import CustomerCard from "./CustomerCard";

const PremiumBites = ()=>{

    const dispatch = useDispatch()
    const premiumBites = useSelector((state)=>state.premiumBites)

    useEffect(()=>{
        dispatch(fetchPremiumBites())
    },[])

    return (
        <>
            {
                premiumBites.loading &&
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
                premiumBites.premiumBites && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        premiumBites.premiumBites.map((meal)=>(
                            <CustomerCard
                                className="mb-5"
                                meal = {meal}
                                key={meal._id}
                            />
                        ))
                    }
                </div>
            }
        </>
    )

}

export default PremiumBites;