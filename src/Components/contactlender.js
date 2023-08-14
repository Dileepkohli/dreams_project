import React  from 'react'
import { Paper, TextField } from '@mui/material';
import { IoCallSharp } from 'react-icons/io5';
import { ImMobile } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsFillAlarmFill } from 'react-icons/bs';
import { IoPersonSharp } from 'react-icons/io5';
import { BsPersonVideo } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function myinformation () {
  
    return (
      <div>
         <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
            <Link to='/myaccount' ><img src={require('./Images/WhatsApp Image 2023-07-24 at 12.58.35.jpg')} width={250} height={40}/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto mt-2">
                    <li class="nav-item ms-4 "><Link to='/builddream' className='text-dark text-decoration-none'>BUILD A DREAM</Link> </li>
                    <li class="nav-item ms-4"><Link to='/inspire' className='text-dark text-decoration-none'>INSPIRE</Link></li>
                    <li class="nav-item ms-4"><Link to='/community' className='text-dark text-decoration-none'>COMMUNITY</Link></li>
                    <li class="nav-item ms-4"><Link to='/mydreams' className='text-dark text-decoration-none'>MY DREAMS</Link></li>
                    <li class="nav-item ms-4">LOGIN</li>
                    <li class="nav-item ms-4">SIGNUP</li>
                </ul>
            </div>
            </nav>
        </header>
        <section>
        <div className='p-4'>
            <p className='text-primary' style={{fontSize:24}}>Contact lender</p><br/>
            <div className='row p-3' style={{marginTop:-40}}>
                <div className='col-md-5 contact p-5'>
                    <div align='center'>
                        <IoCallSharp className='callicon' />
                    </div>
                </div>
                   <Paper className='col-md-7 lender' elevation={12} >
                    <div>
                        <p className='mt-2' style={{fontSize:18}}>Lenders Details</p>
                        <div className='d-flex  p-1'>
                           <IoPersonSharp style={{fontSize:18}}/>
                           <p style={{marginLeft:10, marginTop:-5,fontSize:18}}>Name:</p>
                           <div align='end'><p style={{marginLeft:115, marginTop:-5,fontSize:18}} >{}</p></div>
                        </div> 
                        <div className='d-flex  p-1'>
                           <ImMobile style={{fontSize:18}}/>
                           <p style={{marginLeft:10, marginTop:-5,fontSize:18}}>Phone Number:</p>
                           <div align='end'><p style={{marginLeft:40, marginTop:-5,fontSize:18}} >{}</p></div>
                        </div>
                        <div className='d-flex  p-1'>
                           <MdEmail style={{fontSize:18}}/>
                           <p style={{marginLeft:10, marginTop:-5,fontSize:18}}>Email:</p>
                           <div align='end'><p style={{marginLeft:50, marginTop:-5,fontSize:18}} >{}</p></div>
                        </div>
                        <div className='d-flex  p-1'>
                           <BsPersonVideo style={{fontSize:18}}/>
                           <p style={{marginLeft:10, marginTop:-5,fontSize:18}}>Unique Id:</p>
                           <div align='end'><p style={{marginLeft:45, marginTop:-5,fontSize:18}} >{}</p></div>
                        </div>
                    </div>
                </Paper>
            </div><br/>
            <div className='p-3 col-md-12 dream' style={{borderRadius:15}}>
                <div className='text-white p-2 pt-3' style={{fontWeight:600}}>
                    Pre-approval certificate:<br/>
                    #E394275
                </div><br/>
            </div><br/>

            <p className='text-primary' style={{fontSize:24}}>Contact Broker / Lender</p><br/>
            <div className='row' style={{marginTop:-20}}>
                <div className='col-md-4'>
                    <div className='p-2 '>
                    <div className='dollar'  elevation={6} style={{borderRadius:15}}>
                        <div className='pt-4' align='center'>
                           <BsFillAlarmFill style={{fontSize:150}}/>
                           <p className='pt-4'>SCHEDULE CALL</p><br/>
                           
                        </div>
                    </div>
                    </div>
                </div>
                <div className='col-md-4 '>
                    <div className='p-2 '>
                    <div className='p-3 disply' elevation={6} style={{borderRadius:15}}>
                        <div className=''   align='center'>
                           <MdEmail style={{fontSize:180}}/>
                           <p className='pt-2'>EMAIL</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-2'>
                    <div className='call'  elevation={6} style={{borderRadius:15}}>
                        <div style={{paddingTop:50}} align='center'>
                           <img src={require('./Images/phone-call.png')} width={120} height={120}/>
                           <p className='pt-4'> CALL</p><br/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
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
