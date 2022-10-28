import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faMoneyBillAlt, faReceipt, faUtensils, faUsers, faWallet } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    return (
        <div className="sidebar">
            <div className="sidebarBrand">
                <h2> 
                    <span>
                        <FontAwesomeIcon icon={ faUtensils } />
                    </span> 
                    COOX'S RESTAURANT 
                </h2>
            </div>
            <div className="sidebarMenu mt-5">
                <ul className="">
                    <li>
                        <Link className="text-decoration-none" to='/admin/dashboard'>
                            <span>
                                <FontAwesomeIcon icon={ faDashboard } />
                            </span>
                            <span> Dashboard </span> 
                        </Link>
                    </li>

                    <li>
                        <Link className="text-decoration-none" to='/admin/dashboard'>
                            <span>
                                <FontAwesomeIcon icon={ faUsers } />
                            </span>
                            <span>Customers</span>
                        </Link> 
                    </li>

                    <li>
                        <Link className="text-decoration-none" to='/admin/dashboard'>
                            <span>
                                <FontAwesomeIcon icon={ faMoneyBillAlt } />
                            </span>
                            <span>Sales</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="text-decoration-none" to='/admin/dashboard'>
                            <span>
                                <FontAwesomeIcon icon={ faWallet } />
                            </span>
                            <span>Expenses</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="text-decoration-none" to='/admin/dashboard'>
                            <span>
                                <FontAwesomeIcon icon={ faReceipt } />
                            </span>
                            <span>Inventory</span>
                        </Link>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Sidebar