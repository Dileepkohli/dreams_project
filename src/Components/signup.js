import { Paper, TextField } from '@mui/material'
import React from 'react';
import GoogleIcon from './Images/google-48.png';
import AppleIcon from './Images/apple.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import authServices from '../services/authServices';
import { MuiOtpInput } from 'mui-one-time-password-input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

export default function signup() {
    const [otp, setOtp] = useState();
    const [borrowerId, setborrowerId]= useState();
    const [isRegister, setRegister] = useState(true);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showpassword, setShowpassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowpassword = () => setShowpassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    
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
               
                //navigate('/');
            }
            if (response.success == 1) {
                enqueueSnackbar("password changed", {variant: "success",anchorOrigin:{ vertical: 'top',
                horizontal: 'right'},autoHideDuration: 3000})
                navigate('/signin');
              }
  
        })
        console.log(otp)
    }

    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email address')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        cnfPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cnfPassword: ''
        },
        validationSchema,


        onSubmit: (values) => {

            if (values.password == values.cnfPassword) {
                console.log(true)
                var dataObj = {
                    name: values.email,
                    email: values.email,
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
                                <TextField id="standard-basic" type='email' label="Enter Your Username or Email " value={formik.values.email} onChange={formik.handleChange} name='email' placeholder='Enter your Username Or Email' variant="standard" fullWidth  /><br />
                                {formik.touched.email && formik.errors.email ? ( <div style={{color:'red'}}>{formik.errors.email}</div>) : null}<br/>

                                <FormControl  variant="standard" fullWidth >
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formik.values.password} 
                                        onChange={formik.handleChange} 
                                        name='password'
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                    </FormControl>
                                {formik.touched.password && formik.errors.password ? ( <div style={{color:'red'}}>{formik.errors.password}</div>) : null}<br/><br/>
                                <FormControl  variant="standard" fullWidth >
                                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showpassword ? 'text' : 'password'}
                                        value={formik.values.cnfPassword} 
                                        onChange={formik.handleChange} 
                                        name='cnfPassword'
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowpassword}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {showpassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                    </FormControl>
                                {formik.touched.cnfPassword && formik.errors.cnfPassword ? ( <div style={{color:'red'}}>{formik.errors.cnfPassword}</div>) : null}<br/>

                                <div className='d-flex pt-5' style={{ marginRight: 30 }}>
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
