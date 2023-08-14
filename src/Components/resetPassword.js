import { Paper, TextField } from '@mui/material'
import React, { useState } from 'react';
import GoogleIcon from './Images/google-48.png';
import AppleIcon from './Images/apple.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useFormik } from 'formik';

export default function signin() {
    const navigate  = useNavigate();
   const formik = useFormik({
    initialValues:{
        newpassword:'',
        confirmNewpassword:''
    },
    onSubmit:(values)=>{
        if(values.newpassword==values.confirmNewpassword){
            console.log(true);
            console.log(values)
        }else{
            console.log(false)
        }
        navigate('/signin')
    }
   })

    

   
  return (
    <div>
       <div className='row'>
          <div className='col-md-4 dream'></div>
          
          <div className='col-md-7  col-md-6 col-12 p-4 justify-content-end align-items-center'>
           
          <div align='end' style={{marginRight:30}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div>
                    <form className='p-3' onSubmit={formik.handleSubmit} >
                        <div className=' ps-5 pt-5 pb-5 '>
                            <span style={{fontSize:24,fontWeight:600}}>Reset Password? </span><br/><br/>

                            <TextField type='password' id="standard-basic" label="Enter  New Password" name='newpassword' onChange={formik.handleChange} value={formik.values.newpassword} placeholder='Enter your Password' variant="standard"  fullWidth required/><br/><br/>

                            <TextField type='password' id="standard-basic" label="Confirm  New Password" name='confirmNewpassword' onChange={formik.handleChange} value={formik.values.confirmNewpassword}  placeholder='Enter your Password' variant="standard"  fullWidth required/><br/><br/>
                                    
                                    <div  className='d-flex pt-4' >
                                        <button className='btn btn-primary ms-auto' style={{borderRadius:20,width:140}}>Cancel</button>
                                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:140}} type='submit'><>Continue</> <span><BsArrowRight/></span></button>
                                    </div>
                        </div>
                        <p className='pt-5 mt-4'></p>
                    </form>
                </div>
               
        </div>
    </div>
  )
}
