import React from "react";
import { Formik ,Form } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import InputField from "../general/InputField";
import { login } from "../../features/admin/admin";
import { loadMessage, clearMessage } from "../../features/errorMessage/errorMessage";

const AdminLogin = ()=>{
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
                                    onSubmit = {(values)=>{
                                        const requestOptions = {
                                            headers: {
                                                "Acess-Controll-Allow-Origin": "*",
                                                "Content-Type": "application/json;charset=UTF-8",
                                                "accept":"application/json"
                                            },
                                            body: values
                                        }
                                        axios.post('http://127.0.0.1:5000/api/admin/login', requestOptions)
                                        .then((response)=>{
                                            dispatch(login(response))
                                            navigate('/')
                                        })
                                        .catch((error)=>{
                                            dispatch(loadMessage(error.response))
                                        })
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
                                    <Link to='/admin/register' className="lead text-end mt-3">Don't have an account? SignUp</Link>
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

                                <div className="col ms-5 me-5 mt-5">
                                    <Formik 
                                    initialValues={{
                                        password: "",
                                        email: ""
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
                                        axios.post('http://127.0.0.1:5000/api/admin/login', requestOptions)
                                        .then((response)=>{
                                            dispatch(login(response))
                                            dispatch(clearMessage())
                                            navigate('/')
                                        })
                                        .catch((error)=>{
                                            dispatch(loadMessage(error.response))
                                        })
                                    }}
                                    >
                                        {
                                            formik =>(
                                                <Form>
                                                    <fieldset className="form-group">
                                                        <legend className="border-bottom mb-4 text-center mt-4">Sign In</legend>
                                                        <p className="text-danger text-lead">{errorMessage}</p>
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
                                    <Link to='/admin/register' className="lead text-end mt-3">Don't have an account? SignUp</Link>
                                </div>

                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default AdminLogin;