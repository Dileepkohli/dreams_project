import React, { Component } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { HiCheck } from 'react-icons/hi';
import {  TextField } from '@mui/material'
import {BsSearch} from 'react-icons/bs';
import {MdOutlineLunchDining} from 'react-icons/md'
import {MdOutlineFlightTakeoff} from 'react-icons/md';
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineHome} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function builddream () {
  
    return (
      <div>
        <div className='row'>
            <div className='dream col-md-4 '>
                <div className='timeline justify-content-center align-items-center' >
                    <Timeline position="right">
                    <TimelineItem>
                        <TimelineSeparator style={{height:75}}>
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25}} ><p style={{marginLeft:3,marginTop:-5}}>1</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:8,fontSize:14,color:'white'}}>Build Your dreams<span className='ms-2'><HiCheck style={{fontSize:25}}/></span></TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator style={{height:75}}>
                        <TimelineDot variant="outlined" className=' text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>2</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14}}>House selected</TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator style={{height:75}}>
                        <TimelineDot variant="outlined" className=' text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>3</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14}}>Types of home</TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator style={{height:70}}>
                        <TimelineDot variant="outlined" className=' text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>4</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:8,fontSize:14}}>Property Usage</TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator style={{height:75}}>
                        <TimelineDot variant="outlined" className='text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>5</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14}}>loan details</TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" className='text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p  style={{marginLeft:3,marginTop:-5}}>6</p></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:8,fontSize:14,color:'lightgrey'}}>Credit score</TimelineContent>
                    </TimelineItem>

                    </Timeline>
                </div>
                <p className='text-white' style={{marginLeft:150,}}>Let's start your dream</p> <p className='text-white' style={{marginLeft:170}}>in a few steps!</p>
            </div>
            <div className='col-md-8 p-3 '>
            <div align='end' style={{marginRight:30}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div>
                <div className='p-5  mt-2'>
                <h3 className=''>Let's Build Your dream!</h3><br/>
                    <div className='d-flex'><TextField  placeholder='Search' id="standard-basic" sx={{width:550}} variant="standard" fullWidth/><BsSearch   style={{position:'relative'}} /></div><br/>
                    <div className='d-flex flex-wrap mt-5' style={{marginLeft:-20}}>
                        <Link  to='/houseselect' className='text-decoration-none'>
                            <div className='paper1 '>
                            <div className='icon1'><AiOutlineHome/></div>
                                <p className='' style={{fontSize:13,fontWeight:500,}} align='center'>HOUSE</p>
                        </div></Link>
                        <Link to='/flightselect' className='text-decoration-none' >
                            <div className='paper2 '>
                            <MdOutlineFlightTakeoff className='icon2'/>
                            <p className='pt-3' style={{fontSize:13,fontWeight:500,}} align='center'>TRAVEL</p>
                        </div></Link>
                        <Link to='/dining' className='text-decoration-none'>
                        <div className='paper3 '>
                            <MdOutlineLunchDining className='icon3'/>
                            <p className='pt-2' style={{fontSize:13,fontWeight:500,}} align='center'>DINNING</p>
                        </div></Link>
                        <Link to='/retail' className='text-decoration-none'>
                        <div className='paper4'>
                            <FiShoppingCart  className='icon4'/>
                            <p className='pt-3'style={{fontSize:13,fontWeight:500,}} align='center'>RETAIL</p>
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
