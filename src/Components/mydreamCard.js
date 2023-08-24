
import { Paper } from '@mui/material';
import React, { Component } from 'react';
import { BiEdit  } from "react-icons/bi";
import { RiDeleteBinLine } from 'react-icons/ri';
import CreateMydream from './createmyDream';


export default class mydreamCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      type:''
    }
  }
  
      showModel = (e, type) => {
        this.setState({
            show: !this.state.show,
            type: type
        })
      }

  render() {
    return (
      <div className='p-3' >
       
            <Paper className='card ms-2' elevation={3}  style={{marginLeft:-20,borderRadius:20,width:555}}>
              <div className="d-flex ms-auto " >
                  <button className="border-0 bg-transparent edit-icon" title="Edit"  onClick={(e)=>this.showModel(e,"update")}><BiEdit className='icon24'/></button>
                  <button style={{marginRight:10}} className="border-0 bg-transparent del-icon" title="Delete"  onClick={(e)=>this.showModel(e,"delete")}><RiDeleteBinLine  className='icon25'/></button><br/>
              </div>
              <div className='row' style={{marginTop:-20}}>
                <div className='p-2 col-sm-3' style={{marginLeft:20}} >
                    {
                      <img className='image'    width={140} height={140} style={{borderRadius:70,}} />
                    }
                </div>
                  <div className='col-sm-3 p-2 pt-4' style={{marginLeft:40}}>
                    <h3 style={{color:'blue'}}>{this.props.EachItemData.card_title}</h3>
                    <p>Upcoming on {this.props.EachItemData.card_date}</p>
                    <p style={{fontWeight:600}}>Order Id : {this.props.EachItemData.order_id}</p>
                  </div>
                  <div className='col-sm-2 p-4' style={{marginTop:50,}}><button className='btn btn-primary ' style={{borderRadius:20,marginLeft:30,height:36}}>Pending</button></div>
              </div>
              <div className='p-4' style={{marginTop:-20,color:'CaptionText'}}>
                <p style={{textAlign:'justify',marginLeft:5}}>{this.props.EachItemData.card_data}</p>
                <p style={{marginTop:10}}></p>
              </div>
            </Paper>

            { <CreateMydream  setitemData={(itemData) => this.setState({itemData : [...this.state.itemData, ...itemData]})}  onClose={this.showModel}  show={this.state.show}  type={this.state.type}     /> }
            
      </div>
    )
  }
}
