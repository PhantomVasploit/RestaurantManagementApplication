import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



import Navbar from "../Navbar";
import MainCourse from "./MainCourse";
import BreakfastBites from "./BreakfastBites";
import LifeStyle from "./LifeStyle";
import PremiumBites from "./PremiumBites";

const Menu = ()=>{

    const [ currentTab, setCurrentTab ] = useState(1)
    const toggleTab = (index) =>{
        setCurrentTab(index)
    }

    return(
        <>
            <div className="menuPage">
                <section id="searchContainer">
                    <div className="container-fluid">
                        <div className="row searchSection border border-warning rounded-top justify-content-center align-items-center">
                            <Navbar />
                            <div className="searchBar justify-content-center align-items-center">
                                <h1 className="display-5 text-light text-center">Search For Your Favourite Meal</h1>
                                <div className="form-group d-flex justify-content-center">
                                    <input type="text" className="form-control w-50 text-center" placeholder="Search Meal" />
                                    <span className="input-group-text ms-2">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="menu" className="mt-5">
                    <div className="container-lg">
                        <div className="text-center">
                            <h1 className="display-5 text-center text-light mb-5 menu-heading"> Our <span className="text-dark">Menu</span></h1>
                        </div>

                        <div className="bloc-tabs">
                            <button 
                            className={currentTab === 1 ? "tabs active-tabs": "tabs"}
                            onClick = { ()=>{ toggleTab(1) } }
                            >Breakfast Bites</button>
                            <button 
                            className={currentTab === 2 ? "tabs active-tabs": "tabs"}
                            onClick = { ()=>{ toggleTab(2) } }
                            >Main Course</button>
                            <button 
                            className={currentTab === 3 ? "tabs active-tabs": "tabs"}
                            onClick = { ()=>{ toggleTab(3) } }
                            >Life Style</button>
                            <button 
                            className={currentTab === 4 ? "tabs active-tabs": "tabs"}
                            onClick = { ()=>{ toggleTab(4) } }
                            >Premium Bites</button>
                        </div>
                        <div className={ currentTab === 1 ? "content active-content" : "content" }>
                            <div className="content active-content">
                                <BreakfastBites />
                            </div>
                        </div>
                        <div className={ currentTab === 2 ? "content active-content" : "content" }>
                            <div className="content active-content">
                                <MainCourse />
                            </div>
                        </div>
                        <div className={ currentTab === 3 ? "content active-content" : "content" }>
                            <div className="content active-content">
                                <LifeStyle />
                            </div>
                        </div>
                        <div className={ currentTab === 4 ? "content active-content" : "content" }>
                            <div className="content active-content">
                                <PremiumBites />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Menu;