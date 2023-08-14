import { Paper, TextField } from '@mui/material'
import React, { useState } from 'react';
import GoogleIcon from './Images/google-48.png';
import AppleIcon from './Images/apple.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input';

export default function signin() {
  
    
  return (
    <div>
        <div className='row'>
          <div className='col-md-4 dream'></div>
            <div className='col-md-7  col-md-6 col-12 p-4 justify-content-end align-items-center'>
                <div align='end' style={{marginRight:30}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div>
                <div className='p-5'>
                    <h3 className='text-primary'>Blog Comments</h3>
                    <h5 className='pt-4'>Title of the Blog</h5>
                    <div className='d-flex pt-4'>
                        <img className='border' width={70} height={70}  style={{borderRadius:35}} />
                        <div className='p-1 ms-4'>
                            <p>Moni Acharya, Aug 10 2023</p>
                            <p>Lorem ipsum dummy text wow beautiful </p>
                        </div>
                    </div>
                    <div className='d-flex pt-2'>
                    <img className='border' width={70} height={70}  style={{borderRadius:35}} />
                        <div className='p-1 ms-4'>
                            <p>Moni Acharya, Aug 10 2023</p>
                            <p>Lorem ipsum dummy text wow beautiful </p>
                        </div>
                    </div>
                    <div className='d-flex pt-2'>
                    <img className='border' width={70} height={70}  style={{borderRadius:35}} />
                        <div className='p-1 ms-4'>
                            <p>Moni Acharya, Aug 10 2023</p>
                            <p>Lorem ipsum dummy text wow beautiful </p>
                        </div>
                    </div>
                </div>
                <div className='row p-5'>
                    <div className='col-11'>
                        <TextField type='text'  label='Write Comment here' fullWidth />
                    </div>
                    <div className='col-1'>
                        <button className='btn btn-primary' style={{width:100,height:55}}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
