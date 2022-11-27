import React from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Overview from "./Overview";

const Dashboard = ()=>{

    return(
        <>
            

            <div className="dashboard">
                    <Navbar />
                    <main>
                        <Sidebar />
                        <section className="middle">
                            <Overview />
                            <section className="expenseAnalytics">

                            </section>
                            <section className="salesAnalytics">

                            </section>
                            <section className="transactions">

                            </section>
                        </section>
                        <section className="right">

                        </section>
                    </main>
                </div>
        </>
    )
}

export default Dashboard;