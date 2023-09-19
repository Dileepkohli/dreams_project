import React, { Component } from 'react';
import { Paper, TextField } from '@mui/material';
import { IoPersonSharp } from 'react-icons/io5';
import { BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Navbar from './Navbar';
import Footer from './Footer';


export default function myaccount  () {
     
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



    return (
      <div>
        <header>
          <Navbar/>
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
           <Footer/>
        </footer>
      </div>
    )
  }
