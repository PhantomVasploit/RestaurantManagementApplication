import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearOrders, decreaseQuantity, decreasePrice, increasePrice, increaseQuantity, removeItem } from "../../features/orders/order";

import Navbar from "./Navbar";

const Orders = ()=>{

    const dispatch = useDispatch()
    const orders = useSelector((state)=>state.orders.orders)
    let [totalCost, setTotalCost] = useState(0)

    useEffect(()=>{
        let cost = 0
        orders.map((order)=>{return (cost += (order.itemPrice * order.quantityOrdered) )})
        setTotalCost(cost)
    }, [])

    const countTotal = ()=>{
        let count = 0
        orders.map((order)=> { return count += (order.itemPrice * order.quantityOrdered)})
        setTotalCost(count)
    }

    return(
        <div className="orderPage">

            <div  className="container">
                <Navbar />
                <div className="cartContainer mt-5">
                    <div className="orderTitle">
                        <h2>Orders</h2>
                        <p>Your orders</p>
                    </div>
                    <table className="table table-striped mt-4">
                        <tr className="">
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Sub-total</th>
                        </tr>
                        {
                            orders.map((order)=>(
                                <tr key={order.itemName}>
                                    <td >
                                        <div className="row justify-content-start align-items-center">
                                            <div className="col">
                                                <img className="border border-warning rounded-end" src={order.imgUrl} alt={order.name} width="150px" height="150px" />
                                            </div>
                                            <div className="col">
                                                <p className="lead">{ order.itemName }</p>
                                                <p className="lead">KES { order.itemPrice }</p>
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
                                                {order.quantityOrdered}
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
                        <table>
                            <tr>
                                <td><h5 className="lead">Total</h5></td>
                                <td className="lead">KES { totalCost } </td>
                            </tr>
                            <tr>
                                <td><Link to="/customer/reservation/confirm" className="btn btn-success">Confirm</Link></td>
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