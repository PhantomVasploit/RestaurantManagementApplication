import React from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import InputField from "../general/InputField";
import { login } from "../../features/customer/customer";
import { loadMessage, clearMessage } from "../../features/errorMessage/errorMessage";

const CustomerLogin = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const errorMessage = useSelector( (state)=>state.errorMessage.errorMessage )

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
                    <div className="formPage">
                        <h2 className="border-bottom display-4 mb-4 text-center mt-4 text-light">COOX'S RESTAURANT</h2>
                        <div className="pageContainer">

                            <div className="formOverlayContainer">
                                <div className="formOverlay">
                                    
                                </div>
                            </div>

                            <div className="formContainer signUpContainer">
                            <Formik

                                initialValues={{
                                    email: '',
                                    password: ''
                                }}

                                validationSchema = {validate}

                                onSubmit = { (values)=>{
                                    const requestOptions = {
                                        headers: {
                                            "Acess-Controll-Allow-Origin": "*",
                                            "Content-Type": "application/json;charset=UTF-8",
                                            "accept":"application/json"
                                        },
                                        body: values
                                    }
                                    axios.post('http://127.0.0.1:5001/api/customer/login', requestOptions)
                                    .then((response)=>{
                                        dispatch(login(response))
                                        navigate('/customer/home')
                                    })
                                    .catch((error)=>{
                                        dispatch(loadMessage(error.response))
                                    })
                                }}

                                >
                                    <Form>
                                        <fieldset className="form-group">
                                            <legend className="display-6 mb-4 text-center">Sign In</legend>
                                            <InputField className="formInput" placeholder="Email" name='email' type='email' required />
                                            <InputField className="formInput" placeholder="Password" name='password' type='password' required />
                                        </fieldset>
                                        <div className="d-flex justify-content-center mt-4">
                                            <input className="btn btn-warning" type="submit" value="Login" />
                                        </div>
                                        <Link to='/customer/login' className="lead text-dark text-decoration-none mt-3">Don't Have An Account? SignUp</Link>
                                    </Form>
                                </Formik>
                            </div>

                        </div>
                    </div>
                :
                    <div className="formPage">
                        <h2 className="border-bottom display-4 mb-4 text-center mt-4 text-light">COOX'S RESTAURANT</h2>
                        <div className="pageContainer">

                            <div className="formOverlayContainer">
                                <div className="formOverlay"></div>
                            </div>

                            <div className="formContainer signUpContainer">
                            <Formik

                                initialValues={{
                                    email: '',
                                    password: ''
                                }}

                                validationSchema = {validate}

                                onSubmit = { (values)=>{
                                    const requestOptions = {
                                        headers: {
                                            "Acess-Controll-Allow-Origin": "*",
                                            "Content-Type": "application/json;charset=UTF-8",
                                            "accept":"application/json"
                                        },
                                        body: values
                                    }
                                    axios.post('http://127.0.0.1:5001/api/customer/login', requestOptions)
                                    .then((response)=>{
                                        dispatch(login(response))
                                        dispatch(clearMessage())
                                        navigate('/customer/home')
                                    })
                                    .catch((error)=>{
                                        dispatch(loadMessage(error.response))
                                    })
                                }}

                                >
                                    <Form>
                                        <fieldset className="form-group">
                                            <legend className="display-6 mb-4 text-center">Sign In</legend>
                                            <p className="text-danger text-lead">{errorMessage}</p>
                                            <InputField className="formInput" placeholder="Email" name='email' type='email' required />
                                            <InputField className="formInput" placeholder="Password" name='password' type='password' required />
                                        </fieldset>
                                        <div className="d-flex justify-content-center mt-4">
                                            <input className="btn btn-warning" type="submit" value="Login" />
                                        </div>
                                        <Link to='/customer/login' className="lead text-dark text-decoration-none mt-3">Don't Have An Account? SignUp</Link>
                                    </Form>
                                </Formik>
                            </div>

                        </div>
                    </div>
            }
        </>
    );
}

export default CustomerLogin;