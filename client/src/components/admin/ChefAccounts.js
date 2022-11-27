import React, { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import DashboardIcon from "@material-ui/icons/Dashboard"
import PeopleIcon from '@material-ui/icons/People';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CloseButton from '@material-ui/icons/Close'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { fetchChefAccounts } from "../../features/accounts/chefAccounts/chefAccounts";
import { logout } from "../../features/admin/admin";
import Navbar from "./Navbar";

const ChefAccounts = ()=>{
    const dispatch = useDispatch()
    const chefAccounts = useSelector((state)=>state.chefAccounts)
    useEffect(()=>{
        dispatch(fetchChefAccounts())
    }, [])
    return(
        <>

            {
                chefAccounts.loading &&
                <div className="loaderContainer">
                    <img src={require('../../assets/loader.gif')} alt="loaderImage" />
                </div>
            }

            {
                chefAccounts.chefAccounts.length >= 1 &&
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
                                <Link to='/admin/dashboard/customer-accounts' className="text-decoration-none">
                                    <PeopleIcon />
                                    <h4>Customers</h4>
                                </Link>
                                <Link to='/admin/dashboard/chef-accounts' className="text-decoration-none active">
                                    <PeopleIcon />
                                    <h4>Chef</h4>
                                </Link>
                                <Link to='/admin/dashboard/expenses' className="text-decoration-none ">
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
                            <section className="customers">
                                <div className="header">
                                    <h1>Chef Accounts</h1>
                                </div>
                                <table className="table table-striped mt-4">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>FirstName</th>
                                            <th>lastName</th>
                                            <th>Email</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            chefAccounts.chefAccounts.map((account)=>(
                                            <tr key={account._id}>
                                                <td>{account.firstName}</td>
                                                <td>{account.lastName}</td>
                                                <td>{account.email}</td>
                                                <td>
                                                    <Link 
                                                        to='/admin/dashboard' 
                                                        className="text-decoration-none text-danger"
                                                        onClick={async ()=>{
                                                            await axios.delete(`http://127.0.0.1:5002/api/chef/${account._id}`)
                                                        }}
                                                    >
                                                        <DeleteIcon className="text-danger" />
                                                    </Link>
                                                </td>
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </section>
                        </section>
                    </main>
                </div>
            }
            
        </>
    )
}

export default ChefAccounts