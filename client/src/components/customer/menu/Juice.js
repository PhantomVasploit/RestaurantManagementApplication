import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { clearJuice, fetchJuice } from "../../../features/menu/juice/juice";
import CustomerCard from "./CustomerCard";

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
                juice.juice && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        juice.juice.map((meal)=>(
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

export default Juice;