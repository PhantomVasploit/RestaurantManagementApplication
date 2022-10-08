import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { clearCognac, fetchCognac } from "../../../features/menu/cognac/cognac";
import CustomerCard from "./CustomerCard";

const Cognac = ()=>{

    const dispatch = useDispatch()
    const cognac = useSelector((state)=>state.cognac)

    useEffect(()=>{
        dispatch(fetchCognac())
        return ()=>{
            dispatch(clearCognac())
        }
    }, [])

    return (
        <>

            {
                cognac.loading && 
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
                cognac.cognac && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        cognac.cognac.map((meal)=>(
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

export default Cognac;