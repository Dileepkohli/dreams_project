import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Paper } from '@mui/material';
import { BsClouds } from 'react-icons/bs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function Dashboard() {
  const data   = [
    
     { no:1 , orderId:'#1234ABCD' , date:'21/03/2023', time:'08:40 PM'},
     { no:2 , orderId:'#1234ABCD' , date:'21/03/2023', time:'08:40 PM'},
     { no:3 , orderId:'#1234ABCD' , date:'21/03/2023', time:'08:40 PM'},
     { no:4 , orderId:'#1234ABCD' , date:'21/03/2023', time:'08:40 PM'},
     { no:5 , orderId:'#1234ABCD' , date:'21/03/2023', time:'08:40 PM'}
    
  ]

  return (
    <div>
        <Navbar/><br/><br/><br/><br/>
          <div className='p-4'>
            <p className='text-primary' style={{fontSize:22}}>User Dashboard</p>
            <div className='row '>
                <div className='col-md-4'>
                <Paper className='p-2 m-2' elevation={2}>
                    <p>Total order</p>
                    <div className=' d-flex p-2'>
                       <img src={require('./Images/egg.png')} style={{backgroundColor:'pink'}} width={50} height={50}/>
                       <p style={{marginLeft:30,marginTop:10}}>52%</p>
                       <div className='ms-auto '><img src={require('./Images/signal.png')}  width={50} height={50}/></div>
                    </div>
                    <p className='pt-2 p-2'>1,20,000</p>
                </Paper>
                </div>
                <div className='col-md-4'>
                <Paper className='p-2 m-2' elevation={2}>
                   <p> Total Pending Dreams</p>
                   <div className=' d-flex p-2'>
                       <img src={require('./Images/egg.png')} style={{backgroundColor:'pink'}} width={50} height={50}/>
                       <p style={{marginLeft:30,marginTop:10}}>52%</p>
                       <div className='ms-auto '><img src={require('./Images/signal.png')}  width={50} height={50}/></div>
                    </div>
                    <p className='pt-2 p-2'>1,20,000</p>
                </Paper>
                </div>
               <div className='col-md-4'>
               <Paper className='p-2 m-2' elevation={2}>
                    <p>Total Fulfilled Dreams</p>
                    <div className=' d-flex p-2'>
                       <img src={require('./Images/egg.png')} style={{backgroundColor:'pink'}} width={50} height={50}/>
                       <p style={{marginLeft:30,marginTop:10}}>52%</p>
                       <div className='ms-auto '><img src={require('./Images/signal.png')}  width={50} height={50}/></div>
                    </div>
                    <p className='pt-2 p-2'>1,20,000</p>
                </Paper>
               </div>
            </div>
            <div className='row pt-5  '>
                <div className='col-md-3  '>
                    <div className=' paper24 m-2'>
                      <div align='center' className='pt-5'><BsClouds className='icon34' /></div>
                      <p className='text-primary' style={{fontSize:25,fontWeight:'600'}} align='center'>My Dreams</p>
                    </div>
                </div>
                <div className='col-md-3  '>
                  <div className=' m-2 paper25'>
                  <div align='center' className='pt-5'><BsClouds className='icon34' /></div>
                    <p  style={{fontSize:25,fontWeight:'600',color:'red'}} align='center'>My Fulfilled Dreams</p>
                  </div>
                </div>
                <div className='col-md-3  '>
                    <div className=' m-2 paper26'>
                    <div align='center' className='pt-5'><BsClouds className='icon34' /></div>
                        <p className='text-primary ' style={{fontSize:25,fontWeight:'600',color:'red'}} align='center'>Community Fulfilled Dreams</p>
                    </div>
                </div>
                <div className='col-md-3  '>
                   <div className=' m-2 paper27'>
                      <div align='center' className='pt-5'><img src={require('./Images/review.png')}  width={50} height={50}  /></div>
                      <p className='text-primary ' style={{fontSize:25,fontWeight:'600'}} align='center'>Inspire</p>
                   </div>
                </div>
            </div>
            <div>
              <div className='pt-4'>
                <div className='d-flex pt-5 p-2'>
                  <p className='text-primary '  style={{fontSize:22}}>My Dreams</p>
                  <button className='btn btn-primary ms-auto' style={{width:70,height:37,borderRadius:40}}>View</button>
                </div>
                <Paper className='mt-4' style={{borderRadius:10}}>
                   <TableContainer>
                      <Table aria-label="simple table">
                         <TableHead>
                           <TableRow >
                             <TableCell align='center' style={{fontSize:20,fontWeight:500}}>No</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Order Id</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Date</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Time</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Action</TableCell>
                           </TableRow>
                         </TableHead>
                         <TableBody>
                           { 
                            data.map((item) =>(
                              <TableRow>
                                 <TableCell align='center'>{item.no}</TableCell>
                                 <TableCell align='center'>{item.orderId}</TableCell>
                                 <TableCell align='center'>{item.date}</TableCell>
                                 <TableCell align='center'>{item.time}</TableCell>
                                 <TableCell align='center' >
                                    <div className='d-flex justify-content-center' >
                                        <button className='btn btn-primary' style={{width:80,height:35,borderRadius:40}}>View</button>
                                        <button className='btn btn-primary ms-4' style={{width:80,height:35,borderRadius:40}}>Edit</button>
                                    </div>
                                  </TableCell>
                              </TableRow>
                            ))
                           }
                             
                         </TableBody>
                      </Table>
                   </TableContainer>
                </Paper>
              </div>
              <div  className='pt-4'> 
                <div className='d-flex pt-5 p-2'>
                  <p className='text-primary '  style={{fontSize:22}}>My Fulfilled Dreams</p>
                  <button className='btn btn-primary ms-auto' style={{width:70,height:37,borderRadius:40}}>View</button>
                </div>
                <Paper  className='mt-4' style={{borderRadius:10}}>
                   <TableContainer>
                      <Table aria-label="simple table">
                         <TableHead>
                           <TableRow >
                             <TableCell align='center' style={{fontSize:20,fontWeight:500}}>No</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Order Id</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Date</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Time</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Action</TableCell>
                           </TableRow>
                         </TableHead>
                         <TableBody>
                         { 
                            data.map((item) =>(
                              <TableRow>
                                 <TableCell align='center'>{item.no}</TableCell>
                                 <TableCell align='center'>{item.orderId}</TableCell>
                                 <TableCell align='center'>{item.date}</TableCell>
                                 <TableCell align='center'>{item.time}</TableCell>
                                 <TableCell align='center' >
                                    <div className='d-flex justify-content-center' >
                                        <button className='btn btn-primary' style={{width:80,height:35,borderRadius:40}}>View</button>
                                        <button className='btn btn-primary ms-4' style={{width:80,height:35,borderRadius:40}}>Edit</button>
                                    </div>
                                  </TableCell>
                              </TableRow>
                            ))
                           }
                         </TableBody>
                      </Table>
                   </TableContainer>
                </Paper>
              </div>
              <div  className='pt-4'>
                 <div className='d-flex pt-5 p-2'>
                  <p className='text-primary '  style={{fontSize:22}}>Community Fulfilled Dreams</p>
                  <button className='btn btn-primary ms-auto' style={{width:70,height:37,borderRadius:40}}>View</button>
                </div>
                <Paper className='mt-4' style={{borderRadius:10}}>
                   <TableContainer>
                      <Table aria-label="simple table">
                         <TableHead>
                           <TableRow >
                             <TableCell align='center' style={{fontSize:20,fontWeight:500}}>No</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Order Id</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Date</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Time</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Action</TableCell>
                           </TableRow>
                         </TableHead>
                         { 
                            data.map((item) =>(
                              <TableRow>
                                 <TableCell align='center'>{item.no}</TableCell>
                                 <TableCell align='center'>{item.orderId}</TableCell>
                                 <TableCell align='center'>{item.date}</TableCell>
                                 <TableCell align='center'>{item.time}</TableCell>
                                 <TableCell align='center' >
                                    <div className='d-flex justify-content-center' >
                                        <button className='btn btn-primary' style={{width:80,height:35,borderRadius:40}}>View</button>
                                        <button className='btn btn-primary ms-4' style={{width:80,height:35,borderRadius:40}}>Edit</button>
                                    </div>
                                  </TableCell>
                              </TableRow>
                            ))
                           }
                      </Table>
                   </TableContainer>
                </Paper>
              </div>
              <div  className='pt-4'>
                <div className='d-flex pt-5 p-2'>
                  <p className='text-primary '  style={{fontSize:22}}>Inspire</p>
                  <button className='btn btn-primary ms-auto' style={{width:70,height:37,borderRadius:40}}>View</button>
                </div>
                <Paper className='mt-4' style={{borderRadius:10}}>
                   <TableContainer>
                      <Table aria-label="simple table">
                         <TableHead>
                           <TableRow >
                             <TableCell align='center' style={{fontSize:20,fontWeight:500}}>No</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Order Id</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Date</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Time</TableCell>
                             <TableCell align='center'  style={{fontSize:20,fontWeight:500}}>Action</TableCell>
                           </TableRow>
                         </TableHead>
                         { 
                            data.map((item) =>(
                              <TableRow>
                                 <TableCell align='center'>{item.no}</TableCell>
                                 <TableCell align='center'>{item.orderId}</TableCell>
                                 <TableCell align='center'>{item.date}</TableCell>
                                 <TableCell align='center'>{item.time}</TableCell>
                                 <TableCell align='center' >
                                    <div className='d-flex justify-content-center' >
                                        <button className='btn btn-primary' style={{width:80,height:35,borderRadius:40}}>View</button>
                                        <button className='btn btn-primary ms-4' style={{width:80,height:35,borderRadius:40}}>Edit</button>
                                    </div>
                                  </TableCell>
                              </TableRow>
                            ))
                           }
                      </Table>
                   </TableContainer>
                </Paper>
              </div>
            </div>
          </div>
        <Footer/>
    </div>
  )
}
