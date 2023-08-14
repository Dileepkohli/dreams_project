import { Paper, TextField } from '@mui/material'
import React, { Component } from 'react';
import {MdFlightTakeoff} from 'react-icons/md';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {SlCalender} from 'react-icons/sl';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {HiArrowLongRight} from 'react-icons/hi2'
import {HiArrowLongLeft} from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function infodetails ()  {

    const navigate = useNavigate();

    const backwards = () =>{
        navigate('/flightselect')
    }
   
    return (
      <div className='row'>
        <div className='col-md-4  dream'>
        <div className='timeline' >
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
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>2</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14,color:'white'}}>Flight selected </TimelineContent>
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
        <div className='col-md-8 container p-5 mt-1'>
        <div align='end' style={{marginRight:-10}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div><br/>
            <div className='p-2'>
                <Paper elevation={12} className='p-4'  >
                   <div className='d-flex'>
                        <MdFlightTakeoff style={{fontSize:25}}/>
                       <p className='ms-3'>Where  are you from ?</p></div>
                       <div>
                            <FormControl variant="standard" sx={{ m: 1,}} fullWidth>
                                <InputLabel id="demo-simple-select-standard-label ">City</InputLabel>
                                    <Select labelId="demo-simple-select-standard-label "   id="demo-simple-select-standard" label="City">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Delhi</MenuItem>
                                        <MenuItem value={2}>Mumbai</MenuItem>
                                        <MenuItem value={3}>Hyderabad</MenuItem>
                                    </Select>
                            </FormControl>
                       </div><br/>
                       <div className='d-flex pt-2'>
                        <MdFlightTakeoff style={{fontSize:25}}/>
                       <p className='ms-3'>Where  are you going ?</p></div>
                       <div>
                            <FormControl variant="standard" sx={{ m: 1, }} fullWidth>
                                <InputLabel id="demo-simple-select-standard-label ">City</InputLabel>
                                    <Select labelId="demo-simple-select-standard-label "      id="demo-simple-select-standard" label="City">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Delhi</MenuItem>
                                        <MenuItem value={2}>Mumbai</MenuItem>
                                        <MenuItem value={3}>Hyderabad</MenuItem>
                                    </Select>
                            </FormControl>
                       </div><br/><br/>
                      
                </Paper><br/><br/>
                    <div className='p-3 pt-4 d-flex' style={{marginRight:40}}>
                        <button onClick={backwards} className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link  className='text-decoration-none'>Back</Link></button>
                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:100}}><Link to='/flightinfo' className='text-white text-decoration-none'>Next</Link> <HiArrowLongRight/></button>
                    </div>
            </div>
        </div>
      </div>
    )
  }


