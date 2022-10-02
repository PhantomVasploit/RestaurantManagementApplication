import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { fetchWhiteWine } from "../../../features/menu/whiteWine/whiteWine";
import CustomerCard from "./CustomerCard";

const WhiteWine = ()=>{

    const dispatch = useDispatch()
    const whiteWine = useSelector((state)=>state.whiteWine)

    useEffect(()=>{
        dispatch(fetchWhiteWine())
    }, [])

    return (
        <>
            {
                whiteWine.loading &&
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
                whiteWine.whiteWine &&
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        whiteWine.whiteWine.map((meal)=>(
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

export default WhiteWine;