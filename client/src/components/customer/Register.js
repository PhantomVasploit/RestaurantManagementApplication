import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import InputField from "../general/InputField";
import { login } from "../../features/customer/customer";

const CustomerRegister = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
            <div className="container-fluid">
                <div className="row formContainer">

                    <div className="col formSideImage shadow-lg p-3 bg-white">
                        <h1 className="display-4 d-flex justify-content-center formSideText">COOX'S RESTAURANT</h1>
                    </div>

                    <div className="col ms-5 me-5 mt-5">
                    <Formik

                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phoneNumber: '',
                            password: ''
                        }}

                        validationSchema = {validate}

                        onSubmit = {async (values)=>{
                            const requestOptions = {
                                headers: {
                                    "Acess-Controll-Allow-Origin": "*",
                                    "Content-Type": "application/json;charset=UTF-8",
                                    "accept":"application/json"
                                },
                                body: values
                            }
                            const response = await axios.post('http://127.0.0.1:5001/api/customer/register', requestOptions)
                            console.log(JSON.stringify(response))
                            dispatch(login(response))
                            navigate('/')
                        }}

                        >
                            <Form>
                                <fieldset className="form-group">
                                    <legend className="border-bottom display-3 mb-4 text-center mt-4">Sign Up</legend>
                                    <InputField label='First Name' name='firstName' type='text' />
                                    <InputField label='Last Name' name='lastName' type='text' />
                                    <InputField label='Email' name='email' type='email' />
                                    <InputField label='Phone Number' name='phoneNumber' type='tel' />
                                    <InputField label='Password' name='password' type='password' />
                                </fieldset>
                                <div className="d-flex justify-content-center mt-4">
                                    <input className="btn" type="submit" value="Register" />
                                </div>
                            </Form>
                        </Formik>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CustomerRegister;