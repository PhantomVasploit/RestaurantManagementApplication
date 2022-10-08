import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { clearBreakfastBites, fetchBreakfastBites } from "../../../features/menu/breakfastBites/breakfastBites";
import CustomerCard from "./CustomerCard";

const BreakfastBites = ()=>{
    const dispatch = useDispatch()
    const breakfastBites = useSelector((state)=>state.breakfastBites)

    useEffect(()=>{
        dispatch(fetchBreakfastBites())
        return ()=>{
            dispatch(clearBreakfastBites())
        }
    }, [])

    return (
        <>
            { breakfastBites.loading && 
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

            { breakfastBites.breakfastBites && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        breakfastBites.breakfastBites.map((meal)=>(
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

export default BreakfastBites;