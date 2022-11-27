import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard"
import PeopleIcon from '@material-ui/icons/People';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CloseButton from '@material-ui/icons/Close'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from "react-redux";

import { logout } from "../../features/admin/admin";

const Sidebar = ()=>{
    const dispatch = useDispatch()
    return(
        <aside>
            <button id="closeBtn">
                <span><CloseButton /></span>
            </button>
            <div className="sidebar">
                <Link to='/admin/dashboard' className="text-decoration-none active">
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
                <Link to='/admin/dashboard/sale-analysis' className="text-decoration-none ">
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
    )
}

export default Sidebar;