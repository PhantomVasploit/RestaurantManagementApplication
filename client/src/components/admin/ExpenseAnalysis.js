import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import DashboardIcon from "@material-ui/icons/Dashboard"
import PeopleIcon from '@material-ui/icons/People';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CloseButton from '@material-ui/icons/Close'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from "react-redux";

import Navbar from "./Navbar";
import APIConnectionError from "../general/APIConnectionErrorPage";
import { logout } from "../../features/admin/admin";
Chart.register(...registerables);

const ExpenseAnlysis = ()=>{
    const { state } = useLocation()
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    
    
    useEffect(()=>{
        axios
        .get(`http://127.0.0.1:5008/api/stock/purchase/${state.itemName}`)
        .then((response)=>{
             setData(response.data.stock)
        })
        .catch((e)=>{
            setError(e.message)
        })
    }, [])

    let stockData = {
        labels: [],
        datasets: [{
            label: `Total ${state.itemName} (KES)`,
            data: [],
            borderColor: ['rgba(54, 162, 235, 0.2)'],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            pointBackgroundColor: ['rgba(54, 162, 235, 0.2)'],
            pointBorderColor: ['rgba(54, 162, 235, 0.2)']
        }]
    }

    data.map((stock)=>{
        stockData.labels.push(new Date(stock.dateOfPurchase).toLocaleDateString())
        stockData.datasets[0].data.push(parseInt(stock.quantityPurchased) * parseInt(stock.itemPrice))
        return stockData
    })

    console.log(JSON.stringify(stockData))
    return(
        <>
            {
                data.length >= 1 &&
                <div className="dashboard">
                    <Navbar />
                    <main>
                        <aside>
                            <button id="closeBtn">
                                <span><CloseButton /></span>
                            </button>
                            <div className="sidebar">
                                <Link to='/admin/dashboard' className="text-decoration-none ">
                                    <DashboardIcon />
                                    <h4>Dashboard</h4>
                                </Link>
                                <Link to='/admin/dashboard/customer-accounts' className="text-decoration-none ">
                                    <PeopleIcon />
                                    <h4>Customers</h4>
                                </Link>
                                <Link to='/admin/dashboard/chef-accounts' className="text-decoration-none ">
                                    <PeopleIcon />
                                    <h4>Chef</h4>
                                </Link>
                                <Link to='/admin/dashboard/expenses' className="text-decoration-none active">
                                    <TrendingDownIcon />
                                    <h4>Expense Analytics</h4>
                                </Link>
                                <Link to='/admin/dashboard/sale-analysis' className="text-decoration-none">
                                    <TrendingUpIcon />
                                    <h4>Sales Analytics</h4>
                                </Link>
                            </div>

                            <div className="logout">
                                
                                    <ExitToAppIcon />
                                    <h4>Logout</h4>
                                    <Link 
                                        to='/admin/login' 
                                        className="text-decoration-none text-secondary"
                                        onClick={ ()=>{dispatch(logout())} }
                                    >
                                        <small className="text-light">Exit admin dashboard</small>
                                    </Link>
                            </div>
                        </aside>
                        <section className="middle">
                            <Bar data={stockData} />
                        </section>
                    </main>
                </div>
            }

            {
                error && 
                <APIConnectionError />
            }
        </>
    )
}

export default ExpenseAnlysis