import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { fetchLifeStyle } from "../../../features/menu/lifeStyle/lifeStyle";
import CustomerCard from "./CustomerCard";

const LifeStyle = ()=>{

    const dispatch = useDispatch()
    const lifeStyle = useSelector((state)=>state.lifeStyle)

    useEffect(()=>{
        dispatch(fetchLifeStyle())
    }, [])

    return (
        <>
            {
                lifeStyle.loading &&
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
                lifeStyle.lifeStyle && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        lifeStyle.lifeStyle.map((meal)=>(
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

export default LifeStyle;