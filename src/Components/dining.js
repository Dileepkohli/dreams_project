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
import {PiCalendarCheck} from 'react-icons/pi';
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineHome} from 'react-icons/ai';
import {HiArrowLongRight} from 'react-icons/hi2';
import {HiArrowLongLeft} from 'react-icons/hi2';
import { Link } from 'react-router-dom';


export default function dining () {
    
    
   

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
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>2</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14,color:'white'}}>House selected <span className='ms-2'><HiCheck style={{fontSize:25}}/></span></TimelineContent>
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
                <p className='text-white' style={{marginLeft:150}}>Let's start your dream</p> <p className='text-white' style={{marginLeft:170}}>in a few steps!</p>
            </div>
            <div className='col-md-8 p-3 '>
                <div className='p-5  mt-5'>
                <h3 className=''>Let's Build Your dream!</h3><br/>
                <div className='d-flex'><p className=''>Completely employee-owned,we're driven with a passion</p></div><br/><br/>
                <p style={{fontSize:40,color:'gray'}}>We are in progress....</p><br/>
                   
                    <div className='p-3 pt-4 d-flex' style={{marginRight:10}}>
                        <button  className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link to='/builddream' className=' text-decoration-none'>Back</Link></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

