
import { Paper } from '@mui/material';
import React, { Component } from 'react';
import { BiEdit  } from "react-icons/bi";
import { BiSolidQuoteRight  } from "react-icons/bi";
import { RiDeleteBinLine } from 'react-icons/ri';
import CreateCommunity from './createCommunity';


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
      <div className='p-3 ' >
        
            <Paper className='card ms-2 ' elevation={3}  style={{marginLeft:-20,borderRadius:20,width:570}}>
              <div className='flex-wrap'>
                <div className='d-flex' style={{marginTop:10}}>
                  <div className='p-2 ' style={{marginLeft:15}} >
                      {
                        <img className='image'    width={140} height={140} style={{borderRadius:70,}} />
                      }
                  </div>
                    <div className='p-2 pt-4 d-flex' style={{marginLeft:35,marginTop:30}}>
                      <BiSolidQuoteRight className='icon27'/>
                      <h2 style={{color:'blue'}}>{this.props.EachItemData.card_title}</h2>
                    <BiSolidQuoteRight className='icon27'/>
                    </div>
                  
                </div>
                <div className='p-4 flex-wrap' style={{marginTop:-10,color:'CaptionText'}}>
                  <p style={{textAlign:'justify',marginLeft:0}}>{this.props.EachItemData.card_data}</p>
                  <p style={{marginTop:-20}}></p>
                </div>
              </div>
            </Paper>

            { <CreateCommunity  setitemData={(itemData) => this.setState({itemData : [...this.state.itemData, ...itemData]})}  onClose={this.showModel}  show={this.state.show}  type={this.state.type}     /> }
            
      </div>
    )
  }
}
