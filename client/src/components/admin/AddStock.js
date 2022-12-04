import React from "react";
import { Formik ,Form } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import InputField from "../general/InputField";

const AddStock = ()=>{
    const navigate = useNavigate()
    const { state } = useLocation()
    console.log(state)
    const validate = Yup.object({
        quantityPurchased: Yup.number()
        .required("Quantity Purchased Field Is Required"),
    })
    return(
         <div className="formPage">
            <h2 className="display-4 mb-4 text-center mt-4">COOX'S RESTAURANT</h2>
            <div className="pageContainer">

                <div className="formOverlayContainer">
                    <div className="formOverlay"></div>
                </div>

                <div className="formContainer signUpContainer">
                    <Formik 
                    initialValues={{
                        itemName: state.item.itemName,
                        itemPrice: state.item.itemPrice,
                        quantityPurchased: 0
                    }}
                    validationSchema = {validate}
                    onSubmit = {(values)=>{
                        const requestOptions = {
                            headers: {
                                "Acess-Controll-Allow-Origin": "*",
                                "Content-Type": "application/json;charset=UTF-8",
                                "accept":"application/json"
                            },
                            body: values
                        }
                        axios.post('http://127.0.0.1:5008/api/stock/purchase', requestOptions)
                        .then((response)=>{
                            navigate('/admin/dashboard/expenses')
                        })
                        .catch((error)=>{
                            
                        })
                    }}
                    >
                        {
                            formik =>(
                                <Form>
                                    <fieldset className="form-group">
                                        <legend className="display-6 mb-4 text-center">Add Stock</legend>
                                        <p className="text-center lead">{state.item.itemName}</p>
                                        <p className="text-center lead">Stock Price: {state.item.itemPrice}</p>
                                        <InputField label="Add Quantity Purchased" name="quantityPurchased" type="number" required />
                                    </fieldset>
                                    <div className="d-flex justify-content-center mt-4">
                                        <input className="btn btn-warning" type="submit" value="Add" />
                                    </div>
                                </Form>
                            )
                        }

                    </Formik>
                </div>

            </div>
        </div>
    )
}

export default AddStock