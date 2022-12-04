import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard"
import PeopleIcon from '@material-ui/icons/People';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CloseButton from '@material-ui/icons/Close'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';

import { fetchExpenses } from "../../features/analysis/expensesAnalysis/expenses";
import APIConnectionError from "../general/APIConnectionErrorPage";
import Navbar from "./Navbar";
import { logout } from "../../features/admin/admin";


const Expenses = ()=>{
    const dispatch = useDispatch()
    const expenses = useSelector((state)=>state.expenses)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        dispatch(fetchExpenses())
    }, [])

    return(
        <>

            {
                expenses.loading &&
                <div className="loaderContainer">
                    <img src={require('../../assets/loader.gif')} alt="loaderImage" />
                </div>
            }

            {
                expenses.stock.length >= 1 &&
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
                            <div className="header">
                                <h1>Expenses</h1>
                                <br/>
                                <input type='text' 
                                    className="formInput" 
                                    name="search" 
                                    onChange={
                                        (e)=>{
                                            setSearchTerm(e.target.value)
                                        }
                                    } 
                                    placeholder="Search stock item by name..."
                                    autoComplete="off"
                                     />
                            </div>
                            <table className="table table-striped mt-4">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>View Expense Analysis</th>
                                        <th>Add Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        expenses.stock.filter((item)=>{
                                            if(searchTerm === ''){
                                                return item
                                            }else if(item.itemName.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                                return item
                                            }
                                        }).map((item)=>(
                                            <tr key={item._id}>
                                                <td>{item.itemName}</td>
                                                <td>{item.itemPrice}</td>
                                                <td><Link to='/admin/dashboard/expenses-analysis' state={{itemName: item.itemName}} className="text-decoration-none text-dark">Expense Analysis</Link></td>
                                                <td><Link to='/admin/dashboard/add-stock' state={{item}} className="text-decoration-none text-dark">
                                                        <AddIcon />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </section>
                    </main>
                </div>
            }

            {
                expenses.error &&
                <APIConnectionError />
            }

        </>
    )
}

export default Expenses