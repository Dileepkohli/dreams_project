import { Paper, TextField } from '@mui/material'
import React, { useState } from 'react';
import GoogleIcon from './Images/google-48.png';
import AppleIcon from './Images/apple.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input';

export default function signin() {
   const [otp,setOtp] = useState();
   const handleChange = (newValue) => {
    setOtp(newValue)
  }

    const navigate  = useNavigate();

    const handleSubmit = () =>{
      console.log(otp)
      if (response.success == 1) {
        enqueueSnackbar("password changed", {variant: "success",anchorOrigin:{ vertical: 'top',
        horizontal: 'right'},autoHideDuration: 3000})
        navigate('/signin');
      }

  }

  return (
    <div>
       <div className='row'>
          <div className='col-md-4 dream'></div>
          
          <div className='col-md-7  col-md-6 col-12 p-4 justify-content-end align-items-center'>
           
          <div align='end' style={{marginRight:30}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div>
                    <form className='p-3' onSubmit={handleSubmit} >
                        <div className=' ps-5 pt-5 pb-5 '>
                            <span style={{fontSize:24,fontWeight:600}}>OTP Verification? </span><br/><br/>
                                   
                                    <p className='pt-5' style={{fontWeight:'bold'}}>Please Enter The 4 Digit  Code  Send To Your Email </p><br/>
                                    <div className='pt-2' style={{width:320,height:30}}>
                                       <MuiOtpInput value={otp} onChange={handleChange} length={6} />
                                    </div><br/>
                                    <button className='btn btn-link text-decoration-none pt-5' style={{fontWeight:'bold',marginLeft:-10}}>Resend Code</button><br/>
                                    
                                    <div  className='d-flex pt-4' style={{marginRight:30}}>
                                    <button className='btn btn-primary ms-auto' style={{ borderRadius: 20, width: 140 }} onClick={backToForgot}>Cancel</button>
                                        <button className='btn btn-primary ms-auto' style={{borderRadius:20,width:140}} type='submit'><>Continue</> <span><BsArrowRight/></span></button>
                                    </div>
                        </div>
                    </form>
                </div><br/><br/>
               
        </div>
    </div>
  )
}
