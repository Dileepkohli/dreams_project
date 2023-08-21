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
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Paper, FormControl,InputLabel,Select,MenuItem, TextField, Stack, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function builddream ()  {

  const navigate = useNavigate();

  const backwards = () =>{
      navigate('/propertyusage')
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
                        <TimelineDot variant="outlined" className='text-dark' sx={{width:25,height:25,backgroundColor:'lightgray'}} ><p  style={{marginLeft:3,marginTop:-5}}>6</p></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent style={{marginTop:8,fontSize:14,color:'lightgrey'}}>Credit score </TimelineContent>
                    </TimelineItem>

                    </Timeline>
                </div>
                <p className='text-white' style ={{marginLeft:150}}>Let's start your dream</p> <p className='text-white' style={{marginLeft:170}}>in a few steps!</p>
            </div>
                <div className='col-md-8 p-5 '>
                <div align='end' style={{marginRight:-10}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50}/></Link></div><br/>
                       <h3>Loan and Additional Details</h3><br/>
                        <Paper className='p-3 mt-4 ' sx={{borderRadius:5}} elevation={12}>
                        <Tabs >
                          <TabList fullWidth>
                            <Tab style={{margin:20}}>Home Refinance Flow1</Tab>
                            <Tab style={{margin:20}}>Home Refinance Flow2</Tab>
                            <Tab style={{margin:20}}>Home Refinance Flow3</Tab>
                          </TabList>

                          <TabPanel>
                            <div className='p-3'>
                              <p>What is the balance on your principal ?</p>
                              <TextField type='number' placeholder='$' id="standard-basic"  variant="standard" fullWidth /><br/><br/>
                              <p>What is your estimated home value ?</p>
                              <TextField type='number' placeholder='$' id="standard-basic"  variant="standard" fullWidth/><br/><br/>
                              <p>What is your household income ?</p>
                              <TextField type='number' placeholder='$' id="standard-basic"  variant="standard" fullWidth/>
                            </div>
                          </TabPanel>
                          <TabPanel>
                              <div className='p-3'>
                                <p>Do you have second mortage ?</p>
                                <div className='d-flex'>
                                  <button className='select1'>Yes</button>
                                  <button className='select2'>No</button>
                                </div><br/>
                                <p>Are you or your spouse in the military,reserve member or veteran?</p>
                                <div className='d-flex'>
                                  <button className='select1'>Yes</button>
                                  <button className='select2'>No</button>
                                </div><br/>
                                <p>Have you been late on your mortage payment within last year ?</p>
                                <div className='d-flex'>
                                  <button className='select3'>No</button>
                                  <button className='select4'>1 time</button>
                                  <button className='select5' >2 times</button>
                                  <button className='select6'>More than twice</button>
                                  
                                </div><br/>
                                <p>Have you field for Banlkrupcy or Foreclosure within last 7 years ? </p>
                                <div className='d-flex'>
                                  <button className='select7'>No</button>
                                  <button className='select8'>Bankrupcy</button>
                                  <button className='select9' >Foreclosure</button>
                                </div><br/>
                              </div>
                          </TabPanel>
                          <TabPanel>
                            <div className='p-3'>
                              <p>Select your employement status?</p>
                              <div className='d-flex flex-wrap' >
                                  <button className='select10'>Employed</button>
                                  <button className='select11'>Unemployed</button>
                                  <button className='select12'>Selfemployed</button>
                                  <button className='select13'>Retired</button>
                                  <button className='select14' >Military</button>
                                  <button className='select15' >Others</button>
                                </div><br/>
                              <p>Select your current loan term</p>
                                <div style={{marginTop:-30}}>
                                  <FormControl variant="standard" fullWidth>
                                    <InputLabel id="demo-simple-select-standard-label "></InputLabel>
                                        <Select labelId="demo-simple-select-standard-label "   id="demo-simple-select-standard" label="City">
                                            <MenuItem value="">
                                              <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>10 years fixed</MenuItem>
                                            <MenuItem value={2}>20 years fixed</MenuItem>
                                            <MenuItem value={3}>30 years fixed</MenuItem>
                                      </Select>
                                  </FormControl>
                                </div><br/>
                                <p>What is your interest rate?</p>
                                <TextField type='number' id="standard-basic" variant="standard" fullWidth/><br/><br/>
                                <p>What is your zip code?</p>
                                <TextField type='number' id="standard-basic"  variant="standard" fullWidth/><br/><br/>
                                <p>What is your desired savings?</p>
                                <div className='d-flex'>
                                  <button className='select16'>$ Per month</button>
                                  <button className='select17'>Interest rate %</button>
                                </div><br/>
                                <TextField type='number' id="standard-basic"  variant="standard" fullWidth/>
                            </div>
                          </TabPanel>
                        </Tabs>
                        </Paper><br/>
                    <div className='p-3 pt-4 d-flex' style={{marginRight:10}}>
                        <button onClick={backwards} className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link  className=' text-decoration-none'>Back</Link></button>
                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:100}}><Link to='/creditscore' className='text-white text-decoration-none' >Next</Link> <HiArrowLongRight/></button>
                    </div><br/>
                </div>
            </div>
        </div>
    )
  }

