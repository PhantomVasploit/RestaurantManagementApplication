import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { clearMineralWater, fetchMineralWater } from "../../../features/menu/mineralWater/mineralWater";

import CustomerCard from "./CustomerCard";

const MineralWater = ()=>{

    const dispatch = useDispatch()
    const mineralWater = useSelector((state)=>state.mineralWater)

    useEffect(()=>{
        dispatch(fetchMineralWater())
        return ()=>{
            dispatch(clearMineralWater())
        }
    }, [])

    return (
        <>
        
            {
                mineralWater.loading && 
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
                mineralWater.mineralWater && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        MineralWater.MineralWater.map((meal)=>(
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

export default MineralWater;