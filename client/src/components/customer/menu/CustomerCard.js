import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";


import { addOrder } from "../../../features/orders/order";
import { addOrders } from "../../../features/orders/orders";

const CustomerCard = ({meal})=>{
    const dispatch = useDispatch()
    const order = useSelector((state)=>state.order)
    
    const addToCartNotification = ()=>{
        toast.success('Item Added to Cart', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    } 

    return(
        <div className="col-8 col-lg-4 col-xl-3">
            <div className="card shadow p-3 rounded">
            <img className="card-img-top rounded" height="200" width="200" src={meal.imgUrl} alt="mealImage" />
                <div className="card-body">
                    <h6 className="">{meal.name}</h6>
                    <div className="row mt-5">
                        <div className="col">
                            <p className="lead">KES {meal.price}</p>
                        </div>
                        <div className="col">
                            <button 
                                className="btn btn-outline-warning"
                                onClick={ ()=>{
                                    dispatch(addOrder(meal))
                                    addToCartNotification()
                                    dispatch(addOrders(order))
                                }}
                                >Order Now</button>
                                <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default CustomerCard;