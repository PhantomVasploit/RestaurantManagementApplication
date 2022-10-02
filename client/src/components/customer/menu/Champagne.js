import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchChampagne } from "../../../features/menu/champagne/champagne";

import CustomerCard from "./CustomerCard";

const Champagne = ()=>{

    const dispatch = useDispatch()
    const champagne = useSelector((state)=>state.champagne)

    useEffect(()=>{
        dispatch(fetchChampagne())
    }, [])

    return (
        <>
            {
                champagne.loading &&
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
                champagne.champagne && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        champagne.champagne.map((meal)=>(
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

export default Champagne;