import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { fetchAperitifsAndBitters } from "../../../features/menu/aperitifsAndBitters/aperitifsAndBitters";
import CustomerCard from "./CustomerCard";

const AperitifsAndBitters = ()=>{

    const dispatch = useDispatch()
    const aperitifsAndBitters = useSelector((state)=>state.aperitifsAndBitters)

    useEffect(()=>{
        dispatch(fetchAperitifsAndBitters())
    }, [])

    return (
        <>
        
            {
                aperitifsAndBitters.loading &&
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
                aperitifsAndBitters.aperitifsAndBitters && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        aperitifsAndBitters.aperitifsAndBitters.map((meal)=>(
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

export default AperitifsAndBitters;