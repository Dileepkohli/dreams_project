import React, { Component }  from 'react'
import { Paper, TextField } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import { PiPlusBold } from 'react-icons/pi';
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Communitycard from './communityCard';
import CreateCommunity from './createCommunity';

export default class  community extends Component {
    constructor(){
        super();
        this.state = {
            categoryData : [],
            itemData : [],
            newData:'',
            show:false
        }
    }

    showModel = (e) => {
        this.setState({
            show: !this.state.show
        })
      }

   
    render(){

        const cards = this.state.itemData.map((data,indx)=>{
            return(
                   <Communitycard key={indx} EachItemData={data} categoryData={this.state.categoryData} />
            )
        });
      
    return (
      <div>
         <header>
          <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light p-4">
          <Link to='/myaccount'><img src={require('./Images/WhatsApp Image 2023-07-24 at 12.58.35.jpg')} width={250} height={40}/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto mt-3">
                    <li class="nav-item ms-5 "><Link to='/builddream' className='text-dark text-decoration-none'>BUILD A DREAM</Link> </li>
                    <li class="nav-item ms-5"><Link to='/inspire' className='text-dark text-decoration-none'>INSPIRE</Link></li>
                    <li class="nav-item ms-5"><Link to='/community' className='text-dark text-decoration-none'>COMMUNITY</Link></li>
                    <li class="nav-item ms-5"><Link to='/mydreams' className='text-dark text-decoration-none'>MY DREAMS</Link></li>
                    <li class="nav-item ms-5"><Link to='/'  className='text-dark text-decoration-none' >LOGOUT</Link></li>
                </ul>
            </div>
            </nav><br/><br/>
        </header><br/><br/>
        <section>
           <div className='p-4'>
                <div className='row '>
                        <div className='col-md-6  p-2'>
                            <p className='text-primary' style={{fontSize:25}}>Community Fullfill Dreams</p>
                        </div>
                        <div className='col-md-6   p-2'>
                            <div className='d-flex ' >
                                <p className='ms-auto text-primary' style={{fontSize:25}}>Search</p>
                                <div className='icon d-flex' style={{marginTop:-10}}>
                                    <Paper className='ms-3'>
                                        <AiOutlineSearch className='icon26'/>
                                    </Paper>
                                    <Paper className='ms-3' >
                                        <PiPlusBold className='icon26' onClick={(e)=>this.showModel(e)}/>
                                    </Paper>
                                    <Paper className='ms-3'>
                                        <BiEdit className='icon26'/>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='pt-4'>
                    {
                        this.state.itemData.length > 0 ?
                        <div className='d-flex flex-wrap' style={{marginLeft:-20}}>{cards}</div> 
                        : <div className='d-flex justify-content-center '>
                        <p style={{textAlign:'justify'}}>Hello User! You have no cards added in your account.Please click on 'CREATE' button to start adding your products.</p>
                        </div> 
                    }
                </div>
                <CreateCommunity  setitemData={(itemData) => this.setState({itemData : [...this.state.itemData, ...itemData]})} 
             onClose={this.showModel} show={this.state.show} />
           </div>
          
        </section>
        
        <footer className='footer p-2'>
            <div className='p-5  text-white row '>
                <div className='col-md-3'>
                    <h4>COMPANY</h4><br/>
                    <p>About Us</p>
                    <p>careers</p>
                    <p>Patners</p>
                    <p>Contact</p>

                </div>
                <div className='col-md-3'>
                    <h4>RESOURCES</h4><br/>
                    <p>Resouces center</p>
                    <p>Integration</p>
                    <p>Partners</p>
                    <p>Glossary</p>
                </div>
                <div className='col-md-3'>
                    <p>Sign up for our monthly newsletter</p><hr/>
                    <div className='d-flex'>
                    <p>Email</p>
                        <button className='btn btn-primary ms-auto' style={{borderRadius:30}}>Subscribe</button>
                    </div>
                </div><br/>
                <div className='col-md-3  mt-2' >
                    <div className='d-flex '>
                        <img src={require('./Images/Download_on_the_App_Store_Badge.svg.png')} width={120} height={40} />
                        <img className='ms-2' style={{marginTop:-5}} src={require('./Images/play-store-logo-nisi-filters-australia-11.png')} width={120} height={50}/>
                        
                    </div><br/>
                    <div className='pt-5 social-icon' style={{marginLeft:-15}}>
                        <img src={require('./Images/facebook.png')} width={30} height={30} />
                        <img className='ms-4' src={require('./Images/twitter (2).png')} width={30} height={30}/>
                        <img className='ms-4' src={require('./Images/linkedin.png')} width={30} height={30}/>
                        <img className='ms-4' src={require('./Images/instagram (1).png')} width={25} height={25}/>
                        <img className='ms-3' src={require('./Images/youtube.png')} width={28} height={28} />
                    </div>
                </div><br/><br/>
                <div className='row mt-3'>
                        <div className='col-md-3'><p >License Agreement</p></div>
                        <div className='col-md-3'><p >Privacy Policy</p></div>
                        <div className='col-md-3'><p></p></div>
                        <div className='col-md-3'><p >Copyright @ 2022 Bluelakes,Inc.All rights reserved.</p></div>
                    </div>
            </div>
        </footer>
      </div>
    )
  }
}