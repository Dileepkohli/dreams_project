import React, { Component } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { HiCheck } from 'react-icons/hi';
import {  TextField } from '@mui/material'
import {GoHome} from 'react-icons/go'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {MdFamilyRestroom} from 'react-icons/md'
import {BsBuildings} from 'react-icons/bs';
import {HiArrowLongRight} from 'react-icons/hi2';
import {HiArrowLongLeft} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function builddream ()  {
    const navigate = useNavigate();

    const backwards = () =>{
        navigate('/houseselect')

    }
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
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25,backgroundColor:''}} ><p style={{marginLeft:3,marginTop:-5}}>3</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14,color:'white'}}>Types of home <span className='ms-2'><HiCheck style={{fontSize:25}}/></span></TimelineContent>
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
            <div align='end' style={{marginRight:30}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div>
                <div className='p-5  mt-2'>
                    <h3 className=''>1s 1491 x Legendary Dr. Irvine, CA ?</h3>
                       <div className='d-flex'><p className=''>Completely employee-owned,we're driven with a passion</p></div>
                    <div>
                        <p className='text-primary' style={{fontWeight:'bold'}}>
                            We'll help you lower your monthly payment,<br/>Please give  us some information.<br/><br/>
                            What types of home do you have ? 
                        </p>
                    </div>
            
                    <div className='d-flex flex-wrap pt-4' style={{marginLeft:-30}}>
                        <Link   className='text-decoration-none'><div className='paper11 '>
                              <MdFamilyRestroom className='icon11'/>
                               <p className='' style={{fontSize:11,fontWeight:'bold'}} align='center'>SINGLE FAMILY</p>
                        </div></Link>
                        <div className='paper12 '>
                           <GoHome className='icon12'/>
                           <p className='pt-1'style={{fontSize:11,fontWeight:'bold'}} align='center'>MULTY FAMILY</p>
                        </div>
                        <div className='paper13 '>
                            <HiOutlineBuildingOffice2 className='icon13 '/>
                            <p className='pt-1'style={{fontSize:11,fontWeight:'bold'}} align='center'>CONDO</p>
                        </div>
                        <div className='paper14'>
                            <BsBuildings className='icon14'/>
                            <p className='pt-2' style={{fontSize:11,fontWeight:'bold'}} align='center'>TOWN HOUSE</p>
                        </div>
                    </div><br/>
                    <div className='p-3 pt-4 d-flex' style={{marginRight:10}}>
                        <button onClick={backwards} className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link to='/' className=' text-decoration-none'>Back</Link></button>
                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:100}}><Link to='/propertyusage' className='text-white text-decoration-none' >Next</Link> <HiArrowLongRight/></button>
                    </div><br/>
                </div>
            </div>
        </div>
      </div>
    )
  }

