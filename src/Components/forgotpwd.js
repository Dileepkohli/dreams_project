import { Paper, TextField } from '@mui/material'
import React, { useState } from 'react';
import GoogleIcon from './Images/google-48.png';
import AppleIcon from './Images/apple.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input';
import authServices from '../services/authServices';
import { useSnackbar } from 'notistack';
import { useFormik } from 'formik';
import * as yup from 'yup';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

export default function signin() {

  const [otp, setOtp] = useState();
  const [email, setemail] = useState('');
  const [userId, setUserId] = useState();
  const [isForgot, setForgot] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showpassword, setShowpassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowpassword = () => setShowpassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const validationSchema = yup.object().shape({
    // email: yup
    //     .string()
    //     .email('Invalid email address')
    //     .required('Email is required'),
    newpassword: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
   confirmNewpassword: yup
        .string()
        .oneOf([yup.ref('newpassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
})


  const formik = useFormik({
    initialValues: {
      newpassword: '',
      confirmNewpassword: ''
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.newpassword == values.confirmNewpassword) {
        var dataObj = {
          borrowerId: userId,
          email: email,
          otp: Number(otp),
          password: values.newpassword,
          confirm_password: values.confirmNewpassword
        }
        console.log(dataObj);
        authServices.signIn("/borrower/resetPassword", dataObj).then(response => {
          if (response != undefined) {
            console.log(response);
            if (response.success == 1) {
              enqueueSnackbar("password changed", {variant: "success",anchorOrigin:{ vertical: 'top',
              horizontal: 'right'},autoHideDuration: 3000})
              navigate('/signin');
            }

          }
        })
      } else {
        console.log(false)
      }
      // navigate('/signin')
    }
  })

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setemail(event.target.value);
  }

  const getOTP = () => {
    console.log(email);
    authServices.signIn("/borrower/forgotPassword", { email: email }).then(response => {
      if (response != undefined) {
        console.log(response);
        if (response.data != undefined) {
          setUserId(response.data.borrowerId)
          // {"success":1,"message":"Email sent successfully.","data":{"borrowerId":17}}
        }

      }
    })
  }
  const handleContinue = () => {
    console.log(email);
    if(email == ""){
        enqueueSnackbar("Please Enter email and get OTP", {variant: "error",anchorOrigin:{ vertical: 'top',
        horizontal: 'right'},autoHideDuration: 3000} )
        // alert('sadsad')
    }else if(otp !==undefined){
        setForgot(false);
    }else{
        enqueueSnackbar("Please Enter OTP", {variant: "error",anchorOrigin:{ vertical: 'top',
        horizontal: 'right'},autoHideDuration: 3000})
    }
   
  }
  const backToForgot=()=>{
    setForgot(true);
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-4 dream'></div>
        {isForgot &&
          <div className='col-md-7  col-md-6 col-12 p-4 justify-content-end align-items-center'>

            <div align='end' style={{ marginRight: 30 }}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50} /></Link></div>
            <div className=' ps-5 pt-5 pb-5 '>
              <span style={{ fontSize: 24, fontWeight: 600 }}>Forgot Password? </span><br /><br />

              <TextField id="standard-basic " label="Enter Your  Email " type='email' name='email' placeholder='Enter your Username Or Email' value={email} onChange={handleEmailChange} variant="standard" fullWidth required /><br /><br />
              <button className='btn btn-primary' style={{ width: 100, borderRadius: 20 }} onClick={getOTP}>Get OTP</button><br /><br />
              <p style={{ fontWeight: 'bold' }}>Please Enter The 6 Digit  Code  Send To Your Email </p><br />
              <div style={{ width: 360, height: 40 }}>
                <MuiOtpInput length={6} value={otp} onChange={handleChange} />
              </div><br />
              <button className='btn btn-link text-decoration-none pt-2' style={{ fontWeight: 'bold', marginLeft: -10 }}>Resend Code</button>

              <div className='d-flex pt-3' style={{ marginRight: 30 }}>
              <button className='btn btn-primary ms-auto' style={{ borderRadius: 20, width: 140 }} ><Link to='/signin' className='text-white text-decoration-none'>Cancel</Link></button>
                <button className='btn btn-primary ms-3 ' style={{ borderRadius: 20, width: 140 }} onClick={handleContinue}><>Continue</> <span><BsArrowRight /></span></button>
              </div>
            </div>
          </div>
        }
        {!isForgot &&
          <div className='col-md-7  col-md-6 col-12 p-4 justify-content-end align-items-center'>

            <div align='end' style={{ marginRight: 30 }}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50} /></Link></div>
            <form className='p-3' onSubmit={formik.handleSubmit} >
              <div className=' ps-5 pt-5 pb-5 '>
                <span style={{ fontSize: 24, fontWeight: 600 }}>Reset Password? </span><br /><br />

                <FormControl  variant="standard" fullWidth >
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formik.values.newpassword} 
                                        onChange={formik.handleChange} 
                                        name='newpassword'
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
                <p className='text-danger'>{formik.errors.newpassword}</p><br/><br/>

                <FormControl  variant="standard" fullWidth >
                                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showpassword ? 'text' : 'password'}
                                        value={formik.values.confirmNewpassword} 
                                        onChange={formik.handleChange} 
                                        name='confirmNewpassword'
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
                <p className='text-danger'>{formik.errors.confirmNewpassword}</p><br/><br/>

                <div className='d-flex pt-4' >
                  <button className='btn btn-primary ms-auto' style={{ borderRadius: 20, width: 140 }} onClick={backToForgot}>Cancel</button>
                  <button className='btn btn-primary ms-4' style={{ borderRadius: 20, width: 140 }} type='submit'><>Continue</> <span><BsArrowRight /></span></button>
                </div>
              </div>
              <p className='pt-5 mt-4'></p>
            </form>
          </div>
        }
      </div>
    </div>
  )
}
