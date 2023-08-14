import { Paper, TextField } from '@mui/material'
import React, { Component } from 'react';
import {MdFlightTakeoff} from 'react-icons/md';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {MdFlightClass} from 'react-icons/md';
import {GrUserManager} from 'react-icons/gr';
import {SlCalender} from 'react-icons/sl';
import {HiArrowLongRight} from 'react-icons/hi2'
import {HiArrowLongLeft} from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function infodetails () {

    const navigate = useNavigate();

    const backwards = () =>{
        navigate('/travelers')
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
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>3</p></TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:10,fontSize:14,color:'white'}}>Info details </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator style={{height:70}}>
                        <TimelineDot variant="outlined" className='bg-white text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p style={{marginLeft:3,marginTop:-5}}>4</p></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:8,fontSize:14,color:'white'}}>Confirmation </TimelineContent>
                    </TimelineItem>
                    </Timeline>
                    <div className='justify-content-center align-items-center p-4'><p className='text-white' style={{marginLeft:240}}>Let's start your dream</p> <p className='text-white' style={{marginLeft:260}}>in a few steps!</p></div>
            </div>
        </div>
        <div className='col-md-8 container p-3 '>
        <div align='end' style={{marginRight:-10}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div><br/>
            <div className='p-3'>
            <Paper elevation={12} className='p-4 ' style={{marginLeft:10}} >
                    <div className='d-flex mt-4' >
                        <GrUserManager  style={{fontSize:18}}/> 
                        <p style={{fontSize:13,fontWeight:'bold'}}>How many of you are there ?</p>
                    </div><hr/>
                    <div className='row pt-3'>
                        <div className='col'>
                            <div className='d-flex'>
                                <GrUserManager  style={{fontSize:18}}/> 
                                <p className='ms-2' style={{fontSize:13}}>Adults (Min-1,Max-7)</p>
                            </div>
                            <FormControl variant="standard"  sx={{ m: 1,  minWidth:270,top:-36}}>
                                <InputLabel id="demo-simple-select-standard-label "></InputLabel>
                                    <Select labelId="demo-simple-select-standard-label "   id="demo-simple-select-standard" label="City">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                    </Select>
                            </FormControl>
                        </div>
                        <div className='col'>
                        <div className='col'>
                            <div className='d-flex'>
                                <GrUserManager  style={{fontSize:18}}/> 
                                <p className='ms-2' style={{fontSize:13}}>Children (Min-0,Max-6) (2yrs-11yrs)</p>
                            </div>
                            <FormControl variant="standard"  sx={{ m: 1, minWidth:270,top:-36}}>
                                <InputLabel id="demo-simple-select-standard-label "></InputLabel>
                                    <Select labelId="demo-simple-select-standard-label "   id="demo-simple-select-standard" label="City">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                    </Select>
                            </FormControl>
                        </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                        <div className='col'>
                            <div className='d-flex'>
                                <GrUserManager  style={{fontSize:18}}/> 
                                <p className='ms-2' style={{fontSize:13}}>Infants (Min-0,Max-7) (2yrs-11yrs)</p>
                            </div>
                            <FormControl variant="standard" sx={{ m: 1, minWidth:270,top:-36}}>
                                <InputLabel id="demo-simple-select-standard-label "></InputLabel>
                                    <Select labelId="demo-simple-select-standard-label "   id="demo-simple-select-standard" label="City">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                    </Select>
                            </FormControl>
                        </div>
                        </div>
                        <div className='col'>
                            <div className='d-flex'>
                                <MdFlightClass  style={{fontSize:18}}/> 
                                <p style={{fontSize:13}}>Do you have any fare class preference?</p></div>
                                <FormControl variant="standard" sx={{ m: 1, minWidth:270,top:-36}}>
                                        <InputLabel id="demo-simple-select-standard-label "></InputLabel>
                                            <Select labelId="demo-simple-select-standard-label "   id="demo-simple-select-standard" label="City">
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={1}>Economy</MenuItem>
                                                <MenuItem value={2}>Premium economy</MenuItem>
                                                <MenuItem value={3}>Business</MenuItem>
                                                <MenuItem value={4}>First class</MenuItem>
                                            </Select>
                                    </FormControl>
                        </div>
                    </div>
                </Paper><br/>
                    <div className='p-3 mt-3 pt-5 d-flex' style={{marginRight:40}}>
                        <button onClick={backwards} className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link to='' className='text-decoration-none text-primary'>Back</Link></button>
                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:100}}><Link to='/confirmation' className='text-white text-decoration-none'>Next</Link> <HiArrowLongRight/></button>
                    </div><br/><br/>
            </div>
        </div>
      </div>
    )
  }

