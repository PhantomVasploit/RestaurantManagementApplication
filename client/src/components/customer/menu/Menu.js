import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

const Menu = ()=>{
    return (
        <>
            <div className="categoryPage">
                <Navbar />
                <section className="categories">
                    <h1>Our <span>Menu</span> </h1>

                    <div className="boxContainer">
                    
                            <div className="box">
                                <Link to='/customer/menu/breakfast' className="text-decoration-none">
                                    <img className="image" src={require('../../../assets/sImg6.jpg')} alt="burger" />
                                    <div className="content">
                                        <img src={require('../../../assets/s6.png')} alt='burger' />
                                        <h3>Breakfast & Bites</h3>
                                        <p>
                                            The most delicious quality bites will have you wishing there were more. 
                                            Your taste senses will explode with flavor from dishes prepared with affection by the best chefs, 
                                            making every event feel otherworldly.
                                        </p>
                                    </div>
                                </Link>
                            </div>

                        <div className="box">
                            <Link to='/customer/menu/premium-bites' className="text-decoration-none">
                                <img className="image" src={require('../../../assets/sImg1.jpg')} alt="burger" />
                                <div className="content">
                                    <img src={require('../../../assets/s1.png')} alt='burger' />
                                    <h3>PremiumBites</h3>
                                    <p>
                                        The most delicious quality bites will have you wishing there were more. 
                                        Your taste senses will explode with flavor from dishes prepared with affection by the best chefs, 
                                        making every event feel otherworldly.
                                    </p>
                                </div>
                            </Link>
                            </div>
                        

                        <div className="box">
                            <Link to='/customer/menu/main-course' className='text-decoration-none'>
                                <img className="image" src={require('../../../assets/sImg2.jpg')} alt="burger" />
                                <div className="content">
                                    <img src={require('../../../assets/s2.png')} alt='burger' />
                                    <h3>Main Course</h3>
                                    <p>
                                        The most delicious quality bites will have you wishing there were more. 
                                        Your taste senses will explode with flavor from dishes prepared with affection by the best chefs, 
                                        making every event feel otherworldly.
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="box">
                            <Link to='/customer/menu/juice' className="text-decoration-none" >
                                <img className="image" src={require('../../../assets/sImg4.jpg')} alt="burger" />
                                <div className="content">
                                    <img src={require('../../../assets/s4.png')} alt='burger' />
                                    <h3>Beverage</h3>
                                    <p>
                                        The most delicious quality bites will have you wishing there were more. 
                                        Your taste senses will explode with flavor from dishes prepared with affection by the best chefs, 
                                        making every event feel otherworldly.
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="box">
                            <Link to='/customer/menu/aperitif' className="text-decoration-none">
                                <img className="image" src={require('../../../assets/alcohol.jpg')} alt="burger" />
                                <div className="content">
                                    <img src={require('../../../assets/s4.png')} alt='burger' />
                                    <h3>Alcoholic Drinks</h3>
                                    <p>
                                        The most delicious quality bites will have you wishing there were more. 
                                        Your taste senses will explode with flavor from dishes prepared with affection by the best chefs, 
                                        making every event feel otherworldly.
                                    </p>
                                </div>
                            </Link>
                        </div>

                        

                        <div className="box">
                            <img className="image" src={require('../../../assets/sImg5.jpg')} alt="burger" />
                            <div className="content">
                                <img src={require('../../../assets/s5.png')} alt='burger' />
                                <h3>PremiumBites</h3>
                                <p>
                                    The most delicious quality bites will have you wishing there were more. 
                                    Your taste senses will explode with flavor from dishes prepared with affection by the best chefs, 
                                    making every event feel otherworldly.
                                </p>
                            </div>
                        </div>

                        
                    </div>

                </section>
            </div>
        </>
    )
}

export default Menu;