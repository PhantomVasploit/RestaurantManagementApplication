import React from "react";



import SearchBar from "./SearchBar";
import BreakfastBites from "./BreakfastBites";


const Menu = ()=>{

    return(
        <>
            <div className="menuPage">
                <SearchBar />

                <section id="menu" className="mt-5">
                    <div className="container-lg">
                        <div className="text-center">
                            <h1 className="display-5 text-center text-light mb-5 menu-heading"> Our <span className="text-dark">Menu</span></h1>
                        </div>
                        <BreakfastBites />
                        <div className="d-flex justify-content-center mt-4">
                            <a href="#sidebar" className="mt-4 mb-4 btn btn-warning" data-bs-toggle="offcanvas" role="button" aria-controls="sidebar">Explore More</a>
                        </div>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar" aria-labelledby="sidebar-label">
                            
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Menu;