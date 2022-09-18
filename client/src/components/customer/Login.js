import React, { useState } from "react";
import { Formik ,Form } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import InputField from "../general/InputField";
import { login } from "../../features/customer/customer";

const CustomerLogin = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const validate = Yup.object({
        password: Yup.string()
        .min(8, "Password should at least be 8 characters long")
        .required("Password field is required"),
        email:Yup.string().email()
        .required("Email is required"),
    })
    return(

        <>
            { 
                !errorMessage 
                ?
                    (
                        <div className="container-fluid">
                            <div className="row formContainer">

                                <div className="col formSideImage shadow-lg p-3 bg-white">
                                    <h1 className="display-3 d-flex justify-content-center formSideText">COOX'S RESTAURANT</h1>
                                </div>

                                <div className="col ms-5 me-5 mt-5">
                                    <Formik 
                                    initialValues={{
                                        password: "",
                                        email: ""
                                    }}
                                    validationSchema = {validate}
                                    onSubmit = {async(values)=>{
                                        const requestOptions = {
                                            headers: {
                                                "Acess-Controll-Allow-Origin": "*",
                                                "Content-Type": "application/json;charset=UTF-8",
                                                "accept":"application/json"
                                            },
                                            body: values
                                        }
                                        const response = await axios.post('http://127.0.0.1:5001/api/customer/login', requestOptions)
                                        if(response.data.message === 'Invalid Login Credentials'){
                                            setErrorMessage(response.data.message)
                                            console.log(response.status)
                                        }else{
                                            dispatch(login(response))
                                            navigate('/')
                                        }
                                    }}
                                    >
                                        {
                                            formik =>(
                                                <Form>
                                                    <fieldset className="form-group">
                                                        <legend className="border-bottom display-3 mb-4 text-center mt-4">Sign In</legend>
                                                        <InputField label="Email" name="email" type="text" />
                                                        <InputField label="Password" name="password" type="password" />
                                                    </fieldset>
                                                    <div className="d-flex justify-content-center mt-4">
                                                        <input className="btn" type="submit" value="Login" />
                                                    </div>
                                                </Form>
                                            )
                                        }

                                    </Formik>
                                    <p className="lead text-end mt-3">Don't have an account? SignUp</p>
                                </div>

                            </div>
                        </div>
                    ) 
                :
                    (
                        <div className="container-fluid">
                            <div className="row formContainer">

                                <div className="col formSideImage shadow-lg p-3 bg-white">
                                    <h1 className="display-3 d-flex justify-content-center formSideText">COOX'S RESTAURANT</h1>
                                </div>

                                <p className="text-danger text-lead">{errorMessage}</p>

                                <div className="col ms-5 me-5 mt-5">
                                    <Formik 
                                    initialValues={{
                                        password: "",
                                        email: ""
                                    }}
                                    validationSchema = {validate}
                                    onSubmit = {async(values)=>{
                                        const requestOptions = {
                                            headers: {
                                                "Acess-Controll-Allow-Origin": "*",
                                                "Content-Type": "application/json;charset=UTF-8",
                                                "accept":"application/json"
                                            },
                                            body: values
                                        }
                                        const response = await axios.post('http://127.0.0.1:5001/api/customer/login', requestOptions)
                                        if(response.data.message === 'Invalid Login Credentials'){
                                            setErrorMessage(response.data.message)
                                            console.log(errorMessage)
                                        }else{
                                            dispatch(login(response))
                                            navigate('/')
                                        }
                                    }}
                                    >
                                        {
                                            formik =>(
                                                <Form>
                                                    <fieldset className="form-group">
                                                        <legend className="border-bottom mb-4 text-center mt-4">Sign In</legend>
                                                        <InputField label="Email" name="email" type="text" />
                                                        <InputField label="Password" name="password" type="password" />
                                                    </fieldset>
                                                    <div className="d-flex justify-content-center mt-4">
                                                        <input className="btn" type="submit" value="Login" />
                                                    </div>
                                                </Form>
                                            )
                                        }

                                    </Formik>
                                    <p className="lead text-end mt-3">Don't have an account? SignUp</p>
                                </div>

                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default CustomerLogin;