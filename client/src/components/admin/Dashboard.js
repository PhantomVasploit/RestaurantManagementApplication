import {faList, faMoneyBillAlt, faReceipt, faUsers, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

import Sidebar from "./Sidebar";


const Dashboard = ()=>{
    const admin = useSelector((state)=>state.admin)

    return (
        <div className="dashboardPage">
            <Sidebar />
            <div className="mainContent">

                <header className="">
                    <h2>
                        <label>
                            <span>
                                <FontAwesomeIcon icon={ faList } />
                            </span>
                        </label>
                        Dashboard
                    </h2>
                    <div className="userWarpper">
                        <div>
                            <h4>{admin.firstName} {admin.lastName}</h4>
                            <small className="text-muted">Super admin</small>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="dashboardCards">

                        <div className="singleCard">
                            <div>
                                <h1>54</h1>
                                <span>Customers</span>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={ faUsers } />
                                </span>
                            </div>
                        </div>

                        <div className="singleCard">
                            <div>
                                <h1>100</h1>
                                <span>Inventories</span>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={ faReceipt } />
                                </span>
                            </div>
                        </div>

                        <div className="singleCard">
                            <div>
                                <h1>KES 400000</h1>
                                <span>Expenses</span>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={ faWallet } />
                                </span>
                            </div>
                        </div>

                        <div className="singleCard">
                            <div>
                                <h1>KES 1000000</h1>
                                <span>Sales</span>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={ faMoneyBillAlt } />
                                </span>
                            </div>
                        </div>


                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard