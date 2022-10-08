import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { clearGin, fetchGin } from "../../../features/menu/gin/gin";

import CustomerCard from "./CustomerCard";

const Gin = ()=>{

    const dispatch = useDispatch()
    const gin = useSelector((state)=>state.gin)

    useEffect(()=>{
        dispatch(fetchGin())
        return ()=>{
            dispatch(clearGin())
        }
    }, [])

    return (
        <>

            {
                gin.loading && 
                <div className="container">
                    <div className="row justifiy-content-center align-items-center">
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
                gin.gin && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        gin.gin.map((meal)=>(
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

export default Gin;