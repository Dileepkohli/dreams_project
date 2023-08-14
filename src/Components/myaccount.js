import React, { Component } from 'react';
import { Paper, TextField } from '@mui/material';
import { IoPersonSharp } from 'react-icons/io5';
import { BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function myaccount  () {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light p-4">
            <img src={require('./Images/WhatsApp Image 2023-07-24 at 12.58.35.jpg')} width={250} height={40}/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto mt-2">
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
        <div className='d-flex  p-4 mt-4'>
          <IoPersonSharp style={{fontSize:21}}/>
          <p className='text-primary' style={{marginLeft:10, marginTop:-5,fontSize:21}}>My Account</p>
        </div><br/>
        <div className='row p-2' style={{marginTop:-50}}>
          <div className='col-md-6'>
            <div className='p-4 '>
               <div className='disply'  elevation={6} style={{borderRadius:15}}>
                  <h4 className='p-3'>Display Name</h4><hr/>
                  <div className='p-4'>

                  <TextField  placeholder='name' id="standard-basic"  variant="standard" fullWidth/><br/><br/>
                  <div align='end'><button className='btn btn-primary' style={{borderRadius:20}}><Link to='/myinfo' className='text-decoration-none text-white'>Change Name</Link></button></div>

                  </div>

               </div>
            </div>
          </div>
          <div className='col-md-6 '>
            <div className='p-4 '>
               <div className='p-3 dollar' elevation={6} style={{borderRadius:15}}>
                <div className='d-flex justify-content-center p-4 mt-4' style={{marginTop:20}}>
                  <BsStarHalf style={{fontSize:21,color:'violet'}}/>
                  <p style={{marginLeft:10, marginTop:-5,fontSize:21,fontWeight:600,color:'violet'}}>$10,000</p>
                </div>
                <h2 align='center' style={{marginTop:-30,color:'violet'}}>Dream Dollars</h2>
                <div align='center'><button className='btn btn-primary mt-3' style={{borderRadius:20,width:100}}>Invite</button></div><br/>
               </div>
            </div>
          </div>
        </div>
        <div className='p-4'>
        <div className='d-flex  mt-4'>
          <IoPersonSharp style={{fontSize:21}}/>
          <p className='text-primary' style={{marginLeft:10, marginTop:-5,fontSize:21}}>My Account</p>
        </div>
          <video height='400' width='100%' style={{borderRadius:30}} controls> 
            <source src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"  fullWidth/> 
          </video> 
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
