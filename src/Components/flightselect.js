import React, { Component } from 'react';
import { TextField } from '@mui/material'
import {BsSearch} from 'react-icons/bs';
import {FaHome} from 'react-icons/fa';
import {LiaHotelSolid} from 'react-icons/lia';
import {MdFlightTakeoff} from 'react-icons/md';
import {HiArrowLongRight} from 'react-icons/hi2'
import {HiArrowLongLeft} from 'react-icons/hi2';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Link } from 'react-router-dom';

export default function travel () {
  
    return (
      <div className='row'>
        <div className='col-md-4 dream'>
            <div className='timeline justify-content-center align-items-center' >
                    <Timeline position="right">
                    <TimelineItem>
                        <TimelineSeparator style={{height:75}}>
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25}} ><p style={{marginLeft:3,marginTop:-5}}>1</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:8,fontSize:14,color:'white'}}>Build Your dreams</TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator style={{height:75}}>
                        <TimelineDot variant="outlined" className=' text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>2</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14,}}>Flight selected </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator style={{height:75}}>
                        <TimelineDot variant="outlined" className=' text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>3</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14,}}>Info details </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator style={{height:70}}>
                        <TimelineDot variant="outlined" className=' text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>4</p></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:8,fontSize:14,}}>Confirmation </TimelineContent>
                    </TimelineItem>
                    </Timeline>
                    <div className='justify-content-center align-items-center p-4'><p className='text-white' style={{marginLeft:240}}>Let's start your dream</p> <p className='text-white' style={{marginLeft:260}}>in a few steps!</p></div>
            </div>
        </div>
        <div className=' col-md-8 p-5' >
        <div align='end' style={{marginRight:-10}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div>
            <div className=' p-3  mt-3'>
                <h3 className='' >Let's Build Your dream !</h3><br/>
                <div className='d-flex'><TextField  type='text' placeholder='Search' id="standard-basic" variant="standard"  style={{width:550}}/><BsSearch   style={{position:'relative'}} /></div><br/><br/>
            </div>
            <div className=' d-flex flex-wrap' style={{marginLeft:-15,marginTop:-40}} >
                <Link to='/infodetails' className='text-decoration-none'>
                    <div className='paper8'>
                        <MdFlightTakeoff className='icon8'/>
                        <p style={{fontSize:13,fontWeight:500,}} align='center' >FLIGHT</p>
                    </div>
                </Link>
                <Link to='/hotelselect' className='text-decoration-none'><div className='paper9 '>
                      <FaHome className='icon9'/>
                      <p style={{fontSize:13,fontWeight:500,marginTop:5}} align='center' >HOTEL</p>
                </div></Link>
                <Link className='text-decoration-none'>
                <div className='paper10' >
                    <LiaHotelSolid  className='icon10' />
                    <p style={{fontSize:13,fontWeight:500,marginTop:5}} align='center' >HOTEL_FLIGHT</p>
                </div>
                </Link>
            </div><br/>
            <div className='p-3 pt-4 mt-4 d-flex' style={{marginRight:40}}>
                        <button className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link to='/builddream' className='text-decoration-none text-primary'>Back</Link></button>
                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:100}}><Link to='/infodetails' className='text-white text-decoration-none'>Next</Link> <HiArrowLongRight/></button>
                    </div>
        </div>
      </div>
    )
  }

