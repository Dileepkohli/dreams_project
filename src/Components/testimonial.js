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
import Navbar from './Navbar';
import Footer from './Footer';
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
    
        // testimonialServices.getAll("/dream/questions/2").then(response => {
        //         if (response != undefined) {
        //             console.log(response);
        //             // var testArr = response.data;
        //             // console.log(testArr);
        //             // setCommunity(response.data)
                   
        //         }
        //     })
    
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
          <Navbar/>
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
            <Footer/>
        </footer>
    </div>
  )
}

