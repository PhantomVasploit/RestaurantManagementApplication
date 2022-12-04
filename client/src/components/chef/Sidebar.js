import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard"
import CloseButton from '@material-ui/icons/Close'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from "react-redux";

import { logout } from "../../features/chef/chef";

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
            </div>

            <div className="logout">
                
                    <ExitToAppIcon />
                    <h4>Logout</h4>
                    <Link 
                        to='/chef/login' 
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