import React, { Component } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { HiCheck } from 'react-icons/hi';
import {GoHome} from 'react-icons/go'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {MdFamilyRestroom} from 'react-icons/md'
import {BsBuildings} from 'react-icons/bs';
import {HiArrowLongRight} from 'react-icons/hi2';
import {HiArrowLongLeft} from 'react-icons/hi2';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Paper, FormControl,InputLabel,Select,MenuItem, TextField, Stack, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function builddream () {

    const navigate = useNavigate();

    const backwards = () =>{
        navigate('/loandetails')
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
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>4</p></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:8,fontSize:14,color:'white'}}>Property Usage  <span className='ms-2'><HiCheck style={{fontSize:25}}/></span></TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator style={{height:75}}>
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>5</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14,color:'white'}}>loan details  <span className='ms-2'><HiCheck style={{fontSize:25}}/></span></TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p  style={{marginLeft:3,marginTop:-5}}>6</p></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:8,fontSize:14,color:'white'}}>Credit score  <span className='ms-2'><HiCheck style={{fontSize:25}}/></span></TimelineContent>
                    </TimelineItem>

                    </Timeline>
                </div>
                <p className='text-white' style={{marginLeft:150}}>Let's start your dream</p> <p className='text-white' style={{marginLeft:170}}>in a few steps!</p>
            </div>
                <div className='col-md-8 p-5 '>
                <div align='end' style={{marginRight:-10}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div>
                    <p style={{fontWeight:'bold',fontSize:20}}>How is Your Credit ?</p>
                    <div className='d-flex flex-wrap pt-4' style={{marginLeft:-20}}>
                        <Link className='text-decoration-none' style={{color:'black'}} >
                        <div className='paper18 p-4 d-flex '>
                            <p style={{color:'darkblue',fontWeight:500,fontSize:15}}>Excellent <br/><br/> Good <br/><br/> Average <br/><br/> Below Average <br/><br/> Poor </p>
                            <div className='p-2'><Slider aria-label="" orientation="vertical"   style={{width:10,marginBottom:40,color:'darkblue'}} /></div>
                            <p style={{fontWeight:500,fontSize:15}}>720+ <br/><br/> 660-719 <br/><br/> 660-659 <br/><br/> 580-619 <br/><br/> Below 580 </p>
                        </div></Link>
                        <Link className='text-decoration-none' style={{color:'black'}} ><div className='paper19  p-4'>
                            <p style={{fontWeight:700}}>Soft credit pull consent</p>
                            <p style={{color:'red',fontSize:12,fontWeight:'bold'}}>Perform Soft Credit Check</p>
                            <p style={{fontSize:12,fontWeight:'bold',textAlign:'justify'}}>*This will not affect your credit.We will not store your name,SSH or address.This process helps with accuracy when trying to find a deal for you.</p>
                            <div className='d-flex'><input type='checkbox' name='check' style={{marginTop:-30}}/><p className=' ms-2' style={{fontSize:11,fontWeight:'bold'}}> I consent to having soft credit checks done as part of the mortage monitoring process.</p></div>
                        </div></Link>
                    </div><br/>
                       
                    <div className='p-3 pt-4 d-flex' style={{marginRight:10}}>
                        <button  onClick={backwards} className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link  className=' text-decoration-none'>Back</Link></button>
                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:100}}><Link to='/offersummary' className='text-white text-decoration-none' >Next</Link> <HiArrowLongRight/></button>
                    </div><br/><br/>
                </div>
            </div>
        </div>
    )
  }

