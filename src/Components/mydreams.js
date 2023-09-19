import React, { Component }  from 'react'
import { Paper, TextField } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import MydreamCard from './mydreamCard';
import CreateMydream from './createmyDream';
import Navbar from './Navbar';
import Footer from './Footer';

import { Link } from 'react-router-dom';

export default class myinformation extends Component {
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
               <MydreamCard key={indx} EachItemData={data} categoryData={this.state.categoryData} />
        )
    });
  
  

    return (
      <div>
         <header>
           <Navbar/>
        </header>
        <section style={{minWidth:400}}>
           <div className='p-4'>
            <div className='row '>
                <div className='col-md-8 '><p className='text-primary pt-2' style={{fontSize:25}}>List Of My Dreams</p></div>
            </div>
            <div className='d-flex pt-4'>
                <button className='btn btn-outline-primary' style={{borderRadius:30,width:100,height:35}}>Pending</button>
                <button className='btn btn-primary ms-4' style={{borderRadius:30,width:100,height:35}}>Fulfilled</button>
                <div className='ms-auto'><button className=' btn btn-outline-dark'   onClick={(e)=>this.showModel(e)}>Create Dream</button></div>
            </div>
            <div className='pt-4'>
                {
                    this.state.itemData.length > 0 ?
                    <div className='d-flex flex-wrap' style={{marginLeft:-10}}>{cards}</div> 
                    : <div className='d-flex justify-content-center '>
                    <p className='p-4' style={{textAlign:'justify',fontSize:22}}>Hello User! You have no dreams added in your Dreams List. Please click on 'CREATE' button to start adding your dreams.</p>
                    </div> 
                }
            </div>
            <CreateMydream  setitemData={(itemData) => this.setState({itemData : [...this.state.itemData, ...itemData]})} 
             onClose={this.showModel} show={this.state.show} />
        </div>
        
        </section>
        
        <footer className='footer p-2'>
           <Footer/>
        </footer>
      </div>
    )
  }
}
