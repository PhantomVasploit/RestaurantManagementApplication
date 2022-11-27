import React from "react";

const Overview = ()=>{
    return(
        <section id="overview" className="overview">
            <div className="header">
                <h1>Overview</h1>
            </div>
            <div className="cards">

                <div className="dashboardCard">
                    <div className="top">
                        <div className="left">
                            <img src={require('../../assets/paypal.png')} alt="" />
                        </div>
                        <img src={require('../../assets/visa.png')} alt="" className="right"/>
                    </div>
                    <div className="middle">
                        <h1>KES 827, 199</h1>
                        <div className="chip">
                            <img src={require('../../assets/card chip.png')} alt="" className="chip" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <small>Card Holder</small>
                            <h5>Coox's Restaurant</h5>
                        </div>
                        <div className="right">
                            <div className="expiry">
                                <small>Expiry</small>
                                <h5>08/23</h5>
                            </div>
                            <div className="cvv">
                                <small>CVV</small>
                                <h5>123</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboardCard">
                    <div className="top">
                        <div className="left">
                            <img src={require('../../assets/mpesa.jpg')} alt="" />
                        </div>
                        <img src={require('../../assets/visa.png')} alt="" className="right"/>
                    </div>
                    <div className="middle">
                        <h1>KES 827, 199</h1>
                        <div className="chip">
                            <img src={require('../../assets/card chip.png')} alt="" className="chip" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <small>Card Holder</small>
                            <h5>Coox's Restaurant</h5>
                        </div>
                        <div className="right">
                            <div className="expiry">
                                <small>Expiry</small>
                                <h5>08/23</h5>
                            </div>
                            <div className="cvv">
                                <small>CVV</small>
                                <h5>123</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="reports">

                <div className="report">
                    <h3>Income</h3>
                    <div>
                        <details>
                            <h1>KES 29023</h1>
                            <h6 className="text-success">+3.5%</h6>
                        </details>
                        <p className="text-muted">
                            Compared to KES 0 last month
                        </p>
                    </div>
                </div>

                <div className="report">
                    <h3>Expenses</h3>
                    <div>
                        <details>
                            <h1>KES 9005</h1>
                            <h6 className="text-danger">-6.5%</h6>
                        </details>
                        <p className="text-muted">
                            Compared to KES 0 last month
                        </p>
                    </div>
                </div>

                <div className="report">
                    <h3>Cashback</h3>
                    <div>
                        <details>
                            <h1>KES 47004</h1>
                            <h6 className="text-success">+7.5%</h6>
                        </details>
                        <p className="text-muted">
                            Compared to KES 0 last month
                        </p>
                    </div>
                </div>

                <div className="report">
                    <h3>Turnover</h3>
                    <div>
                        <details>
                            <h1>KES 118900</h1>
                            <h6 className="text-danger">-17.8%</h6>
                        </details>
                        <p className="text-muted">
                            Compared to KES 0 last month
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Overview;