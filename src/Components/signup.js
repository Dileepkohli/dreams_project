import { Paper, TextField } from '@mui/material'
import React from 'react';
import GoogleIcon from './Images/google-48.png';
import AppleIcon from './Images/apple.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useFormik } from 'formik';
import authServices from '../services/authServices';
import { MuiOtpInput } from 'mui-one-time-password-input';

export default function signup() {
    const [otp, setOtp] = useState();
    const [borrowerId, setborrowerId]= useState();
    const [isRegister, setRegister] = useState(true);
    const handleChangeOTP = (newValue) => {
        setOtp(newValue)
    }

    const handleSubmitOTP = () => {
        let dataObj={
            otp:Number(otp),
            borrowerId:borrowerId
            
        }
        authServices.signUp("/borrower/verifyOTP", dataObj).then(response => {
            if (response != undefined) {
                console.log(response);
                navigate('/signin');
                //navigate('/');
            }
        })
        console.log(otp)
    }

    const navigate = useNavigate();

    const VerifyDetails = (formValues) => {
        const errors = {
            email: '',
            password: '',
            cnfPassword: ''
        }

        if (!formValues.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
            errors.email = 'Invalid email address';
        }

        if (formValues.password.length <= 8) {
            errors.password = 'password is too short';
        } else (formValues.password.length >= 12)
        errors.email = 'password is too long';


        if (formValues.cnfPassword != formValues.password) {
            errors.cnfPassword = 'confirm password should match password'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cnfPassword: ''
        },


        onSubmit: (values) => {

            if (values.password == values.cnfPassword) {
                console.log(true)
                var dataObj = {
                    name: values.email,
                    email: values.email,
                    phone: "",
                    password: values.password,
                    confirm_password: values.cnfPassword

                }

                setRegister(false);
               // console.log(isRegister);
                authServices.signUp("/borrower/signup", dataObj).then(response => {
                    if (response != undefined) {
                        console.log(response.data.borrowerId);
                        setborrowerId(response.data.borrowerId)

                        //navigate('/');
                    }

                })
            } else {
                console.log(false)
            }



        }
    })

    return (
        <div>
            <div className='row'>
                <div className='col-lg-4 dream'></div>
                {isRegister &&
                    <div className='col-lg-7  col-md-6 col-12 p-4 justify-content-end align-items-center'>
                        <div align='end' style={{ marginRight: -10 }}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50} /></Link></div>
                        <form className='p-3' onSubmit={formik.handleSubmit} style={{ marginTop: -20 }}>
                            <div className=' ps-5 pt-4 pb-5 '>
                                <span style={{ fontSize: 24, fontWeight: 600 }}>Signup</span>
                                <p className="pt-3 pb-3 m-0 fon" style={{ color: 'gray' }}>Completely Employee-owened, we're driven with a passion</p>
                                <div className="row d-flex justify-content-center align-items-center login-btn">
                                    <div className='col-md-6 mt-4 '>
                                        <button className='btn go-btn-ol w-100 d-flex justify-content-center align-items-center border-dark' style={{ height: "38px", borderRadius: 50 }} type="submit">
                                            <img src={GoogleIcon} />
                                            <p className="p1 pt-3 ms-2">Continue with Google</p>
                                        </button>
                                    </div>
                                    <div className='col-md-6 mt-4 btn2' >
                                        <button className='btn w-100 ap-btn2 w-100 bg-dark text-white d-flex justify-content-center align-items-center border-dark' style={{ height: "38px", borderRadius: 40 }} type="submit">
                                            <img src={AppleIcon} />
                                            <p className="p2 pt-3 ms-2">Continue with Apple</p>
                                        </button>
                                    </div>
                                </div><br />
                                <p align='center' className='pt-3'>Or</p>
                                <TextField id="standard-basic" type='email' label="Enter Your Username or Email " value={formik.values.email} onChange={formik.handleChange} name='email' placeholder='Enter your Username Or Email' variant="standard" fullWidth required /><br /><br />

                                <TextField id="standard-basic" label="Enter Your  Password" type='password' onChange={formik.handleChange} value={formik.values.password} name='password' placeholder='Enter your Password' variant="standard" fullWidth required />
                                <p className='text-danger'>{formik.errors.password}</p>
                                <TextField id="standard-basic" label="Confirm Your  Password" type='password' onChange={formik.handleChange} values={formik.values.cnfPassword} name='cnfPassword' placeholder='Enter your Password' variant="standard" fullWidth required />
                                <p className='text-danger'>{formik.errors.cnfPassword}</p>

                                <div className='d-flex pt-3' style={{ marginRight: 30 }}>
                                    <button className='btn btn-link ms-auto text-decoration-none'><Link to='/signin' className='text-decoration-none'>Signin</Link></button>
                                    <button className='btn btn-primary ms-2' style={{ borderRadius: 20, width: 140 }} type='submit' >Continue <span><BsArrowRight /></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                }
                { !isRegister &&
                    <div className='col-md-7  col-md-6 col-12 p-4 justify-content-end align-items-center'>

                        <div align='end' style={{ marginRight: 30 }}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50} /></Link></div>
                        {/* <form className='p-3' > */}
                            <div className=' ps-5 pt-5 pb-5 '>
                                <span style={{ fontSize: 24, fontWeight: 600 }}>OTP Verification? </span><br /><br />

                                <p className='pt-5' style={{ fontWeight: 'bold' }}>Please Enter The 6 Digit  Code  Send To Your Email </p><br />
                                <div className='pt-2' style={{ width: 320, height: 40 }}>
                                    <MuiOtpInput length={6} value={otp} onChange={handleChangeOTP} />
                                </div><br />
                                <button className='btn btn-link text-decoration-none pt-4' style={{ fontWeight: 'bold', marginLeft: -10 }}>Resend Code</button><br />

                                <div className='d-flex pt-4' style={{ marginRight: 30 }}>
                                    <button className='btn btn-primary ms-auto' style={{ borderRadius: 20, width: 140 }} onClick={handleSubmitOTP}><>Continue</> <span><BsArrowRight /></span></button>
                                </div>
                            </div>
                        {/* </form> */}
                    </div>
                }
            </div>
        </div>
    )
}
