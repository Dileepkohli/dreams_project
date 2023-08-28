import React from 'react';
import { Paper, TextField } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import { PiPlusBold } from 'react-icons/pi';
import { BiSolidQuoteRight } from 'react-icons/bi';
import { BiEdit  } from "react-icons/bi";
import { RiDeleteBinLine } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import testimonialServices from '../services/testimonialServices';

export default function testimonials() {
    const [community,setCommunity] = useState([])
    const [show,setShow] =  useState(false);
    const [search,setSearch] = useState('');
    const [ searchCommunity,setSearchCommunity] = useState([]);
  
  
    useEffect(()=>{
       getCommunity();
    },[]);

    const getCommunity = () => {
        testimonialServices.getAll("/testimonial/list?pageNo=1&perPage=10").then(response => {
            if (response != undefined) {
                console.log(response);
                var testArr = response.data;
                console.log(testArr);
                setCommunity(response.data)
               
            }
        })
    } 

    useEffect(()=>{
        if(search===''){
            setSearchCommunity(community);
        }else {
            const searched = community.filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
            setSearchCommunity(searched);
        }
    },[search,community])

   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleClick = (e) =>{
        console.log(search)

        // testimonialServices.getAll("testimonial/list?pageNo=1&perPage=10").then(response=>{
        //     if(response != undefined){
        //         console.log(response)

        //         var searchItem = response.data;
        //         console.log(searchItem);
        //         setSearch(response.data)
        //     }
        // })
        // setSearch(data.filter(f => f.title.includes(e.target.value)))
        
    }


    const formik = useFormik({
        initialValues: {
            title: '',
            testimony: '',
            icons: '',
            searching:''
        },
        onSubmit: (values) => {
            console.log(values)
            let dataObj = {
                title: values.title,
                description: values.testimony,
                image: values.icons
            }
            testimonialServices.postData("/testimonial/add", dataObj).then(response => {
                if (response != undefined) {
                    console.log(response);
                    getCommunity();
                    handleClose();
                    // if (response.data != undefined) {

                    // }

                }else{
                    handleClose();
                }
            })
        }
    })
    
  return (
    <div className=''>
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
        </header><br/><br/><br/><br/>
        <section className='p-4'>
        <div className='row '>
                        <div className='col-md-6  p-4'>
                            <p className='text-primary' style={{fontSize:25}}>Community Fullfill Dreams</p>
                        </div>
                        <div className='col-md-6 p-4'>
                            <div className='d-flex ' >
                                <TextField type='text' value={search} className='pt-3' name='search' onChange={(e)=>setSearch(e.target.value)} label='search' placeholder='Search Here'  id="standard-basic" variant='standard' fullWidth/>
                               
                                <div className='icon d-flex' style={{marginTop:-10}}>
                                    <Paper className='ms-4'>
                                        <AiOutlineSearch className='icon26' onClick={handleClick} />
                                    </Paper>
                                    <Paper className='ms-4'>
                                        <PiPlusBold className='icon26' onClick={handleShow}/>
                                    </Paper>
                                    <Paper className='ms-4'>
                                        <BiEdit className='icon26'/>
                                    </Paper>
                                </div>
                            </div>
                        </div>

                        

                        <Modal show={show} onHide={handleClose}   backdrop='static'>
                            
                                        <Modal.Header >
                                           <Modal.Title>Testimonials</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form onSubmit={formik.handleSubmit}>
                                              <TextField type='text' name='title' onChange={formik.handleChange} value={formik.values.title} placeholder='Enter title of testimonial'  variant='outlined' fullWidth required/><br/><br/>
                                              <TextField type='text' name='testimony'  onChange={formik.handleChange} value={formik.values.testimony} placeholder="what's in your mind"  variant='outlined' fullWidth  required/><br/><br/>
                                              <TextField type='file' name='icons'  onChange={formik.handleChange} value={formik.values.icons} fullWidth/><br/><br/><br/>
                                             <div className='d-flex'>
                                                <Button variant="primary" type='submit'>
                                                    submit
                                                </Button>
                                                <Button variant="dark" className='ms-4' onClick={handleClose}>
                                                    Close
                                                </Button>
                                             </div>
                                            </form>
                                        </Modal.Body>
                                    </Modal>
                </div>
                <div className='d-flex flex-wrap pt-4' style={{ marginLeft: -20 }}>
                        {searchCommunity.map((item, index) => {
                            return <Paper className='m-4' key={index} elevation={12} style={{ width: 565, borderRadius: 20 }}>
                                
                                <section className='p-4'>
                                    <div className='row'>
                                       <div className='col-8'><p className='text-primary'>{item.author}.17 Mar,2023</p></div>
                                      
                                    </div>
                                   <div className='row p-2 d-flex'>
                                        <div className='col-sm-4 ' style={{marginLeft:10}} >
                                            <img className='image'    width={140} height={140} style={{borderRadius:70,}} />
                                        </div>                     
                                        <div className='col-sm-7 '>
                                           <h2  className='p-4' ><BiSolidQuoteRight className='icon32'/> {item.title} <BiSolidQuoteRight className='icon32'/></h2>
                                        </div>
                                        
                                    </div>
                                    <p className='pt-2' style={{ textAlign: 'justify' }}>{item.description}</p>
                                </section>
                            </Paper>
                        })}</div>
        </section>
        <footer className='footer'>
            <div className='p-4 text-white row '>
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

