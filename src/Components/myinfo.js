import React, { Component } from 'react'
import { Paper, TextField } from '@mui/material';
import { IoPersonSharp } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Navbar from './Navbar';
import Footer from './Footer';

export default function myinformation () {
  
    const formik = useFormik({
        initialValues : {
            firstname:'',
            lastname:'',
            email:'',
            zipcode:''
        },
        onSubmit:(values) =>{
            console.log(values)
        }
    });

    return (
      <div>
         <header>
          <Navbar/>
        </header>
        <section>
        <div className='d-flex  p-5'  style={{marginTop:-20}}>
          <IoPersonSharp style={{fontSize:21}}/>
          <p className='text-primary' style={{marginLeft:10, marginTop:-5,fontSize:21}}>My information</p>
        </div>
        <div className='row ' style={{marginTop:-50}} >
            <div className='col-md-6  '>
                <div className='p-5 '>
                    <Paper className=' p-5 infocard'  elevation={12}  style={{borderRadius:20}}>
                        <form onSubmit={formik.handleSubmit}>
                        <div className='d-flex  pt-4'>
                            <IoPersonSharp  className='icon'/>
                            <p style={{marginLeft:10, marginTop:-5,color:'black',fontSize:21}}>First Name</p>
                        </div>
                        <TextField  className='text-dark' id="standard-basic"  variant="standard" name='firstname' value={formik.values.firstname} onChange={formik.handleChange}  required fullWidth/>
                        <div className='d-flex  pt-4'>
                            <IoPersonSharp className='icon'/>
                            <p style={{marginLeft:10, marginTop:-5,color:'black',fontSize:21}}>Last Name</p>
                        </div>
                        <TextField  className='text-dark' id="standard-basic"  variant="standard" name='lastname' value={formik.values.lastname} onChange={formik.handleChange}  required fullWidth/>
                        <div className='d-flex  pt-4'>
                            <AiOutlineMail  className='icon'/>
                            <p style={{marginLeft:10, marginTop:-5,color:'black',fontSize:21}}>Email Address</p>
                        </div>
                        <TextField  className='text-dark' id="standard-basic"  variant="standard" name='email' value={formik.values.email} onChange={formik.handleChange}  required fullWidth/>
                        <div className='d-flex  pt-4'>
                            <CiLocationOn className='icon'/>
                            <p style={{marginLeft:10, marginTop:-5,color:'black',fontSize:21}}>Zip Code</p>
                        </div>
                        <TextField  className='text-dark' id="standard-basic"  variant="standard" name='zipcode' value={formik.values.zipcode} onChange={formik.handleChange}  required fullWidth/><br/><br/>
                        <div className='d-flex pt-3'>
                            <button className='btn btn-primary' type='submit' style={{borderRadius:40,width:100,height:37}}>SAVE</button><br/><br/>
                            <button className='btn btn-primary ms-3' style={{borderRadius:40,width:100,height:37}}><Link to='/myaccount' className='text-white text-decoration-none'>BACK</Link></button><br/>
                        </div>
                        </form>
                    </Paper>
                </div>
            </div>
            <div className='col-md-6 '>
            <div className='p-5' >
                <Paper className='p-3 ' elevation={12} style={{borderRadius:10,backgroundColor:'lightcyan'}}>
                    <p className=' p-3'>Connect With Social media  </p>
                <div className='row p-2'>
                    <div className='col '>
                        <Paper className='social ' elevation={3} align='center'>
                            <img src={require('./Images/facebook-circled-48.png')}/>
                            <p className='pt-2'>Facebook</p>
                            <button className='button mt-2'>Connect</button>
                        </Paper>
                    </div>
                    <div className='col '>
                       <Paper className='social' elevation={3} align='center'>
                        <img src={require('./Images/instagram.png')}/>
                        <p className='pt-2'>Instagram</p>
                        <button className='button mt-2'>Connect</button>
                        </Paper>
                    </div>
                </div>
                <div className='row p-2 '>
                    <div className='col '>
                        <Paper className='social ' elevation={3} align='center'>
                        <img src={require('./Images/twitter.png')} />
                            <p className='pt-2'>Twitter</p>
                            <button className='button mt-2'>Connect</button>
                        </Paper>
                    </div>
                    <div className='col '>
                       <Paper className='social' elevation={3} align='center'>
                       <img src={require('./Images/linkedin-circled-48.png')}/>
                       <p className='pt-2'>Linkedin</p>
                        <button className='button mt-2'>Connect</button>
                        </Paper>
                    </div>
                </div>
                </Paper>
            </div>
            </div>
        </div><br/>
        <div className='p-5'>
            <Paper className='info' elevation={12}>
                <p className='text-primary  p-3' style={{fontSize:18}}>Notification</p><hr/>
                <div className='p-4 row text-primary '>
                    <div className='col-md-4 d-flex '>
                        <input type='checkbox' name='check' className='check'/>
                        <p className='pt-2 ms-2' >Email</p>
                    </div>
                    <div className='col-md-4 d-flex  '>
                        <input type='checkbox' name='check' className='check' />
                        <p className='pt-2 ms-2'>Text Message</p>
                    </div>
                    <div className='col-md-4 d-flex  ' align='end'> 
                        <input type='checkbox' name='check' className='check' />
                        <p className='pt-2 ms-2'>
                            App Push Notification
                        </p>
                    </div>
                </div><br/>
            </Paper>
        </div>
        </section>
        
        <footer className='footer p-2'>
           <Footer/>
        </footer>
      </div>
    )
  }
