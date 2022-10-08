import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

import CustomerCard from "./CustomerCard";
import { clearMainCourseMeals, fetchMainCourseMeals } from "../../../features/menu/mainCourse/mainCourse";

const MainCourse = ()=>{
    const dispatch = useDispatch()
    const mainCourseMeals = useSelector( (state)=>state.mainCourseMeals )

    useEffect(()=>{
        dispatch(fetchMainCourseMeals())
        return ()=>{
            dispatch(clearMainCourseMeals())
        }
    }, [])

    return(
        <>
            { 
                mainCourseMeals.loading &&
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
                mainCourseMeals.mainCourseMeals && 
                <div className="row mt-5 align-items-center d-flex justify-content-around">
                    {
                        mainCourseMeals.mainCourseMeals.map((meal)=>(
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

export default MainCourse;