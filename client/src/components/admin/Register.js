import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import InputField from "../general/InputField";
import { login } from "../../features/admin/admin";
import { loadMessage, clearMessage } from "../../features/errorMessage/errorMessage";

const AdminRegister = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const errorMessage = useSelector( (state) => state.errorMessage.errorMessage)

    const validate = Yup.object({
        firstName: Yup.string()
        .required('Please fill the first name field'),
        lastName: Yup.string()
        .required('Please fill the last name field'),
        email: Yup.string()
        .email('Please enter a valid email address')
        .required('Please fill the email field'),
        phoneNumber: Yup.string()
        .phone()
        .required('Please fill the telephone number field'),
        password: Yup.string()
        .min(8, 'The password field should at least have 8 characters')
        .required('Please fill the password field')
    })

    return (
        <>
            {
                !errorMessage
                ?
                    <div className="formPage">
                        <h2 className="border-bottom display-4 mb-4 text-center mt-4 text-light">COOX'S RESTAURANT</h2>
                        <div className="pageContainer">

                            <div className="formOverlayContainer">
                                <div className="formOverlay"></div>
                            </div>

                            <div className="formContainer signUpContainer">
                            <Formik

                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    phoneNumber: '',
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
                                    axios.post('http://127.0.0.1:5000/api/admin/register', requestOptions)
                                    .then((response)=>{
                                        dispatch(login(response))
                                        navigate('/admin/dashboard')
                                    })
                                    .catch((error)=>{
                                        dispatch(loadMessage(error.response))
                                    })
                                }}

                                >
                                    <Form>
                                        <fieldset className="form-group">
                                            <legend className="display-6 mb-4 text-center">Sign Up</legend>
                                            <InputField label='First Name' name='firstName' type='text' required />
                                            <InputField label='Last Name' name='lastName' type='text' required />
                                            <InputField label='Email' name='email' type='email' required />
                                            <InputField label='Phone Number' name='phoneNumber' type='tel' required />
                                            <InputField label='Password' name='password' type='password' required />
                                        </fieldset>
                                        <div className="d-flex justify-content-center mt-4">
                                            <input className="btn btn-warning" type="submit" value="Register" />
                                        </div>
                                    </Form>
                                </Formik>
                                <Link to='/admin/login' className="lead text-dark text-decoration-none mt-3">Already Have An Account? SignIn</Link>
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
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    phoneNumber: '',
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
                                    axios.post('http://127.0.0.1:5000/api/admin/register', requestOptions)
                                    .then((response)=>{
                                        dispatch(login(response))
                                        dispatch(clearMessage())
                                        navigate('/admin/dashboard')
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
                                            <InputField label='First Name' name='firstName' type='text' required />
                                            <InputField label='Last Name' name='lastName' type='text' required/>
                                            <InputField label='Email' name='email' type='email' required />
                                            <InputField label='Phone Number' name='phoneNumber' type='tel' required />
                                            <InputField label='Password' name='password' type='password' required />
                                        </fieldset>
                                        <div className="d-flex justify-content-center mt-4">
                                            <input className="btn" type="submit" value="Register" />
                                        </div>
                                    </Form>
                                </Formik>
                                <Link to='/admin/login' className="lead text-dark text-decoration-none mt-3">Already Have An Account? SignIn</Link>
                            </div>

                        </div>
                    </div>
            }        
            
        </>
    )
}

export default AdminRegister;