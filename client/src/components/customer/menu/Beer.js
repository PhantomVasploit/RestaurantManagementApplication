import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeer } from "../../../features/menu/beer/beer";

import CustomerCard from "./CustomerCard";

const Beer = ()=>{

    const dispatch = useDispatch()
    const beer = useSelector((state)=>state.beer)

    useEffect(()=>{
        dispatch(fetchBeer())
    }, [])

    return (
        <>
            {
                beer.loading && 
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
                beer.beer &&
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        beer.beer.map((meal)=>(
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

export default Beer;