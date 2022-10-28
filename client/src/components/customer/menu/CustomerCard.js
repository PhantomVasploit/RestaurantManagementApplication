import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";


import { addOrder } from "../../../features/orders/order";

const CustomerCard = ({meal})=>{

    const dispatch = useDispatch()
    const addToCartNotification = ()=>{
        toast.success('Item Added to Cart', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    } 

    return(
        <div className="col-md-6 mb-3">
            <div className="menuList text-light">
                <div className="row">
                    <div className="col">
                        { meal.imgUrl ? <img src={meal.imgUrl} alt="mealImage" className="rounded-circle" width="150px" height="150px" /> : <></> }
                    </div>
                    <div className="col menuInfo">
                        <div className="row">
                            <div className="col">{ meal.name }</div>
                            <div className="col">KES { meal.price }</div>
                        </div>
                        
                        <div className="mt-3">
                            <button
                                className="btn btn-warning"
                                onClick={ ()=>{
                                    dispatch(addOrder(meal))
                                    addToCartNotification()
                                }}
                            >
                            Order Now   
                            </button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
                
            </div>
        </div>

        
    )
}

export default CustomerCard;