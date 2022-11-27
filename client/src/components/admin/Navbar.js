import React from "react";
import { useSelector } from "react-redux";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Navbar = ()=>{
    const admin = useSelector((state)=>state.admin)
    return(
        <>
            <nav>
                <div className="navContainer">
                    <div className="logo">
                        <FastfoodIcon />
                    </div>
                    <div className="profileArea">
                        <AccountCircleIcon />
                        <h6 className="lead"> {admin.firstName} {admin.lastName} </h6>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;