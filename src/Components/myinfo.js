import React, { Component } from 'react'
import { Paper, TextField } from '@mui/material';
import { IoPersonSharp } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

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
          <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light p-4">
          <Link to='/myaccount'><img src={require('./Images/WhatsApp Image 2023-07-24 at 12.58.35.jpg')} width={250} height={40}/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto mt-3">
                    <li class="nav-item ms-5 "><Link to='/builddream' className='text-dark text-decoration-none'>BUILD A DREAM</Link> </li>
                    <li class="nav-item ms-5"><Link to='/inspire' className='text-dark text-decoration-none'>INSPIRE</Link></li>
                    <li class="nav-item ms-5"><Link to='/community' className='text-dark text-decoration-none'>COMMUNITY</Link></li>
                    <li class="nav-item ms-5"><Link to='/mydreams' className='text-dark text-decoration-none'>MY DREAMS</Link></li>
                    <li class="nav-item ms-5"><Link to='/'  className='text-dark text-decoration-none' >LOGOUT</Link></li>
                </ul>
            </div>
            </nav>
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
            <div className='p-5  text-white row '>
                <div className='col-md-3'>
                    <h4>COMPANY</h4><br/>
                    <p>About Us</p>
                    <p>careers</p>
                    <p>Patners</p>
                    <p>Contact</p>

                </div>
                <div className='col-md-3'>
                    <h4>RESOURCES</h4><br/>
                    <p>Resouces center</p>
                    <p>Integration</p>
                    <p>Partners</p>
                    <p>Glossary</p>
                </div>
                <div className='col-md-3'>
                    <p>Sign up for our monthly newsletter</p><hr/>
                    <div className='d-flex'>
                    <p>Email</p>
                        <button className='btn btn-primary ms-auto' style={{borderRadius:30}}>Subscribe</button>
                    </div>
                </div><br/>
                <div className='col-md-3  mt-2' >
                    <div className='d-flex '>
                        <img src={require('./Images/Download_on_the_App_Store_Badge.svg.png')} width={120} height={40} />
                        <img className='ms-2' style={{marginTop:-5}} src={require('./Images/play-store-logo-nisi-filters-australia-11.png')} width={120} height={50}/>
                        
                    </div><br/>
                    <div className='pt-5 social-icon' style={{marginLeft:-15}}>
                        <img src={require('./Images/facebook.png')} width={30} height={30} />
                        <img className='ms-4' src={require('./Images/twitter (2).png')} width={30} height={30}/>
                        <img className='ms-4' src={require('./Images/linkedin.png')} width={30} height={30}/>
                        <img className='ms-4' src={require('./Images/instagram (1).png')} width={25} height={25}/>
                        <img className='ms-3' src={require('./Images/youtube.png')} width={28} height={28} />
                    </div>
                </div><br/><br/>
                <div className='row mt-3'>
                        <div className='col-md-3'><p >License Agreement</p></div>
                        <div className='col-md-3'><p >Privacy Policy</p></div>
                        <div className='col-md-3'><p></p></div>
                        <div className='col-md-3'><p >Copyright @ 2022 Bluelakes,Inc.All rights reserved.</p></div>
                    </div>
            </div>
        </footer>
      </div>
    )
  }
