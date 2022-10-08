import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Navbar";

const SearchBar = ()=>{

    return (
        <>
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
        </>
    )

}

export default SearchBar;