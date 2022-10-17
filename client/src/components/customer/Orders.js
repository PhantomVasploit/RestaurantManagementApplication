import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOrders, decreaseQuantity, decreasePrice, increasePrice, increaseQuantity, removeItem } from "../../features/orders/order";

import Navbar from "./Navbar";

const Orders = ()=>{

    const dispatch = useDispatch()
    const orders = useSelector((state)=>state.orders.orders)
    let [totalCost, setTotalCost] = useState(0)

    useEffect(()=>{
        let cost = 0
        orders.map((order)=>{return (cost += (order.price * order.quantity) )})
        setTotalCost(cost)
    }, [])

    const countTotal = ()=>{
        let count = 0
        orders.map((order)=> { return count += (order.price * order.quantity)})
        setTotalCost(count)
    }

    return(
        <div className="orderPage">

            <div  className="container">
                <Navbar />
                <div className="cartContainer mt-5">
                    <table className="table table-striped text-light">
                        <tr className="border border-danger rounded-end">
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Sub-total</th>
                        </tr>
                        {
                            orders.map((order)=>(
                                <tr key={order.name}>
                                    <td >
                                        <div className="row justify-content-start align-items-center">
                                            <div className="col">
                                                <img className="border border-warning rounded-end" src={order.imgUrl} alt={order.name} width="150px" height="150px" />
                                            </div>
                                            <div className="col">
                                                <p className="lead">{ order.name }</p>
                                                <p className="lead">KES { order.price }</p>
                                                <a 
                                                    className="lead text-danger text-decoration-none removeBtn"
                                                    href="/customer/orders"
                                                    onClick={()=>{
                                                        dispatch(removeItem(order))
                                                    }}
                                                    > Remove </a>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col">
                                                <button 
                                                className="btn btn-warning"
                                                onClick={()=>{
                                                    dispatch(decreaseQuantity(order))
                                                    dispatch(decreasePrice(order))
                                                    countTotal()
                                                }}
                                                >-</button>
                                            </div>
                                            <div className="col lead">
                                                {order.quantity}
                                            </div>
                                            <div className="col">
                                                <button 
                                                className="btn btn-warning"
                                                onClick={()=>{
                                                    dispatch(increaseQuantity(order))
                                                    dispatch(increasePrice(order))
                                                    countTotal()
                                                }}
                                                >+</button>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="lead">KES {order.subTotal} </td>
                                </tr>
                            ))
                        }
                    </table>

                    <div className="totalPrice mt-5">
                        <table className="text-light">
                            <tr>
                                <td><h5 className="lead">Total</h5></td>
                                <td className="lead">KES { totalCost } </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button 
                                className="btn btn-danger"
                                onClick={()=>{
                                    dispatch(clearOrders())
                                }}
                                >Clear Cart</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;