import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
        <>
            <div className="box">
                <span className="price">KES {meal.price}</span>
                <img src={meal.imgUrl} alt="mealImage" />
                <h3>{meal.name}</h3>
                <Link 
                    to='/customer/menu/breakfast' 
                    className="btn btn-warning"
                    onClick={()=>{
                        dispatch(addOrder(meal))
                        addToCartNotification()
                    }}
                >Add To Cart</Link>
                <ToastContainer />
            </div>

            
        </>
    )
}

export default CustomerCard;