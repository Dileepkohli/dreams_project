import React, { Component } from 'react'
import { Paper, TextField } from '@mui/material'
import {HiArrowLongRight} from 'react-icons/hi2'
import {HiArrowLongLeft} from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function offersummary () {

    const navigate = useNavigate();

    const backwards = () =>{
        navigate('/creditscore')
    }

    return (
      <div>
        <div className='row'>
            <div className='col-md-4  dream'>
                <div className='m-5 mt-5 offer'>
                    <img  src={require('./Images/offer.png')}/>
                   <p className='text-white mt-5' style={{marginLeft:100}}>Let's start your dream</p> <p className='text-white p2' style={{marginLeft:120}}>in a few steps!</p>
                   <p className='p-5 mt-5'></p><br/>
                </div>
            </div>
                <div className='col-md-8 container p-5 mt-3 '>
                <div align='end' style={{marginRight:-10}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div>
                    <p className='p-2' style={{fontSize:25}}>Offer Summary</p><br/>
                <Paper className='m-2' style={{borderRadius:20}} elevation={12}>
                    <div className='row'>
                        <div className='col-sm-7 p-3'>
                            <p className='ms-4 p-1 text-primary' style={{fontWeight:'bold'}}>We could not find a value that saves you $10,000</p>
                            <p className='ms-4 p-1' style={{fontWeight:'bold',fontSize:14}}>We will set an alarm to notify you when we can make this happen</p>
                        </div>
                        <div className='col-sm-5 p-3 alarm text-white' >
                            <h4>Signup to set an alarm</h4><br/>
                            <button style={{color:'',width:100,height:40,borderRadius:30,backgroundColor:'white',border:'white'}}><Link className='text-decoration-none'>Signup</Link></button>
                        </div>
                    </div> 
                </Paper><br/>
                    <div className='p-3 pt-5 d-flex' style={{marginRight:0}}>
                        <button onClick={backwards} className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link  className='text-decoration-none '>Back</Link></button>
                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:100}}><Link to='/congratulations' className='text-white text-decoration-none'>Next</Link> <HiArrowLongRight/></button>
                    </div><p className='p-1'></p>
                </div>
           </div>
      </div>
    )
  }

