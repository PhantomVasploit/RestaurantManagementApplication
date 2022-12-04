import React from "react";
import { useSelector } from "react-redux";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Navbar = ()=>{
    const chef = useSelector((state)=>state.chef)
    return(
        <>
            <nav>
                <div className="navContainer">
                    <div className="logo">
                        <FastfoodIcon />
                    </div>
                    <div className="profileArea">
                        <AccountCircleIcon />
                        <h6 className="lead"> {chef.firstName} {chef.lastName} </h6>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;