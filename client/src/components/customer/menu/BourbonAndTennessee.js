import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchBourbonAndTennessee } from "../../../features/menu/bourbonAndTennessee/bourbonAndTennessee";

import CustomerCard from "./CustomerCard";

const BourbonAndTennessee = ()=>{

    const dispatch = useDispatch()
    const bourbonAndTennessee = useSelector((state)=>state.bourbonAndTennessee)

    useEffect(()=>{
        dispatch(fetchBourbonAndTennessee())
    }, [])

    return (
        <>
        
            {
                bourbonAndTennessee.loading &&
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
                bourbonAndTennessee.bourbonAndTennessee &&
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        bourbonAndTennessee.bourbonAndTennessee.map((meal)=>(
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

export default BourbonAndTennessee;