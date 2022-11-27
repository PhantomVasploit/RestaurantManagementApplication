import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard"
import PeopleIcon from '@material-ui/icons/People';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CloseButton from '@material-ui/icons/Close'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { fetchSales } from "../../features/analysis/salesAnalysis/sales";
import Navbar from './Navbar'
import APIConnectionError from "../general/APIConnectionErrorPage";
import { logout } from "../../features/admin/admin";
Chart.register(...registerables);

const SalesAnalysis = ()=>{
    const dispatch = useDispatch()
    const sales = useSelector((state)=>state.sales)

    useEffect(()=>{
        dispatch(fetchSales())
    }, [])

    let data = {
        labels: [],
        datasets: [{
            label: 'Total Sales (KES)',
            data: [],
            borderColor: ['rgba(54, 162, 235, 0.2)'],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            pointBackgroundColor: ['rgba(54, 162, 235, 0.2)'],
            pointBorderColor: ['rgba(54, 162, 235, 0.2)']
        }]
    }
    sales.sales.map((sale)=>{
        data.labels.push(sale.itemName)
        data.datasets[0].data.push(parseInt(sale.quantityOrdered) * parseInt(sale.itemPrice))
        return data
    })

    return (
        <>
            {
                sales.loading &&
                <div className="loaderContainer">
                    <img src={require('../../assets/loader.gif')} alt="loaderImage" />
                </div>
            }

            {
                sales.sales.length >= 1 &&
                <div className="dashboard">
                    <Navbar/>
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
                                <Link to='/admin/dashboard/expenses' className="text-decoration-none ">
                                    <TrendingDownIcon />
                                    <h4>Expense Analytics</h4>
                                </Link>
                                <Link to='/admin/dashboard/sale-analysis' className="text-decoration-none active">
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
                            <div className="header">
                                <h1>Sales Analytics</h1>
                            </div>
                            <Line data={data}  />
                        </section>
                    </main>
                </div>
            }

            {
                sales.error &&
                <APIConnectionError />
            }
              
        </>
    )
}

export default SalesAnalysis