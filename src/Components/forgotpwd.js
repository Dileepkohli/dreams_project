import { Paper, TextField } from '@mui/material'
import React, { useState } from 'react';
import GoogleIcon from './Images/google-48.png';
import AppleIcon from './Images/apple.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input';
import authServices from '../services/authServices';

import { useFormik } from 'formik';

export default function signin() {
  const [otp, setOtp] = useState();
  const [email, setemail] = useState('');
  const [userId, setUserId] = useState();
  const [isForgot, setForgot] = useState(true);

  const formik = useFormik({
    initialValues: {
      newpassword: '',
      confirmNewpassword: ''
    },
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
    setForgot(false);
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
                <button className='btn btn-primary ms-auto' style={{ borderRadius: 20, width: 140 }} onClick={handleContinue}><>Continue</> <span><BsArrowRight /></span></button>
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

                <TextField type='password' id="standard-basic" label="Enter  New Password" name='newpassword' onChange={formik.handleChange} value={formik.values.newpassword} placeholder='Enter your Password' variant="standard" fullWidth required /><br /><br />

                <TextField type='password' id="standard-basic" label="Confirm  New Password" name='confirmNewpassword' onChange={formik.handleChange} value={formik.values.confirmNewpassword} placeholder='Enter your Password' variant="standard" fullWidth required /><br /><br />

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
