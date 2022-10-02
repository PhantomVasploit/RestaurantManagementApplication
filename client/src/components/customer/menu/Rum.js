import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchRum } from "../../../features/menu/rum/rum";

import CustomerCard from "./CustomerCard";

const Rum = ()=>{

    const dispatch = useDispatch()
    const rum = useSelector((state)=>state.rum)

    useEffect(()=>{
        dispatch(fetchRum())
    }, [])

    return (
        <>

            {
                rum.loading && 
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
                rum.rum && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        rum.rum.map((meal)=>(
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

export default Rum;