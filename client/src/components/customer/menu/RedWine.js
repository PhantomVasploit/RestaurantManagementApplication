import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { fetchRedWine } from "../../../features/menu/redWine/redWine";
import CustomerCard from "./CustomerCard";

const RedWine = ()=>{

    const dispatch = useDispatch()
    const redWine = useSelector((state)=>state.redWine)

    useEffect(()=>{
        dispatch(fetchRedWine())
    }, [])

    return (
        <>
            {
                redWine.loading && 
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
                redWine.redWine && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        redWine.redWine.map((meal)=>(
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

export default RedWine;