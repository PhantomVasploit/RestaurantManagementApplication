import React from "react";

const CustomerCard = ({meal})=>{
    return(
        <div className="col-md-4">
            <div className="card shadow p-3 rounded">
                <img className="card-img-top rounded" height="200" width="200" src={meal.imgUrl} alt="mealImage" />
                <div className="card-body">
                    <h6 className="">{meal.name}</h6>
                    <div className="row mt-5">
                        <div className="col">
                            <p className="lead">KES {meal.price}</p>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-warning">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard;