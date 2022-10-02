import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { fetchCider } from "../../../features/menu/cider/cider";
import CustomerCard from "./CustomerCard";

const Cider = ()=>{
    
    const dispatch = useDispatch()
    const cider = useSelector((state)=>state.cider)

    useEffect(()=>{
        dispatch(fetchCider())
    }, [])

    return (
        <>

            {
                cider.loading &&
                <div className="container">
                    <div className="row align-items-center justify-content-center">
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
                cider.cider && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        cider.cider.map((meal)=>(
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

export default Cider