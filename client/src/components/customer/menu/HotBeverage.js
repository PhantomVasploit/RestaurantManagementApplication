import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

import { fetchHotBeverage } from "../../../features/menu/hotBeverage/hotBeverage";
import CustomerCard from "./CustomerCard";

const HotBeverage = ()=>{
    
    const dispatch = useDispatch()
    const hotBeverage = useSelector()

    useEffect(()=>{
        dispatch(fetchHotBeverage())
    },[])

    return (
        <>
            {
                hotBeverage.loading &&
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
                hotBeverage.hotBeverage && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        hotBeverage.hotBeverage.map((meal)=>(
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

export default HotBeverage;