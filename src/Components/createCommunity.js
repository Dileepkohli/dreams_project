import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { Paper, TextField } from '@mui/material';


export default class createCommunity extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:''
    }
  }

  onClose = (e) => {
		this.props.onClose && this.props.onClose(e)
	}

  
  

  submitCardForm = (e) =>{
    e.preventDefault()
    console.log(this.state);
    this.props.setitemData([this.state]);
   
    if(this.props.type && this.props.type === 'create'){

      var msg = "Are you sure, you want to save the testimonial?"
      
    }else{

      var msg = "Are you sure, you want to save the product?"
      
    }
    if(window.confirm(msg)){
    this.onClose(e)
  
    }
  }

  hendleDeleteItem =  (e) => {
    e.preventDefault()
    var msg = "Are you sure, you want to delete the product?"
    this.props.setitemData();
    console.log()
    
    
    
    if(window.confirm(msg)){
      this.onClose(e)
    }
  }
  
  handleChange = (e) => {
    const message =  e.target.value;
    if (["card_image", "card_title", "card_date", "card_orderId",].includes(e.target.name)){
      this.setState({[e.target.name]: (e.target.value)})
      this.setState({message})
    }else{
      this.setState({[e.target.name]:e.target.value})
    }
  }

  
  

  render() {

    const {communityData,message} = this.state;
    
    return (

      <div className='container-fluid'>
        {
           this.props.type && this.props.type =='update' ? [

              <Modal  show={this.props.show} onHide={(e)=>this.onClose(e)} >
              <Modal.Header closeButton key="a3">
                  <Modal.Title>Update Community</Modal.Title>
              </Modal.Header>
                <Modal.Body key="a1 " className=''>
                <Paper className='p-4' elevation={12}>  
                          <TextField id="standard-outlined" placeholder='Title '  variant="outlined" type='text'   name='card_title'  onChange={(e) => this.handleChange(e,'')} fullWidth /><br/><br/>
                          <TextField type='file' name='card_image' fullWidth /><br/><br/>
                          <input className='textfield p-2' placeholder='Your Toughts'   variant="outlined" type='text'  name='card_data'  onChange={(e) => this.handleChange(e,'')} fullWidth/>
                        </Paper>
                </Modal.Body>
                  <Modal.Footer key="a2">
                    <Button className="bl-btn2-ol" variant="secondary" onClick={(e)=>this.onClose(e)}>
                      Close
                    </Button>
                    <button className="btn btn-outline-success" type="update" id="submit" onClick={(e)=>this.submitCardForm(e)}>
                      Update
                    </button>
                  </Modal.Footer> 
            </Modal>

           ] 
           : this.props.type && this.props.type === "delete" ? [
             
                <Modal  show={this.props.show} onHide={(e)=>this.onClose(e)}>
              <Modal.Header closeButton key="b3">
                  <Modal.Title>Delete Community</Modal.Title>
              </Modal.Header>
                
                  <Modal.Footer key="b2">
                    <Button className="bl-btn2-ol" variant="secondary" onClick={(e)=>this.onClose(e)}>
                      Close
                    </Button>
                    <button className="btn btn-outline-success" type="delete" id="submit" onClick={(e)=>this.hendleDeleteItem(e)}>
                      Delete
                    </button>
                  </Modal.Footer> 
            </Modal>

           ] 
           : [
                <Modal  show={this.props.show} centered onHide={(e)=>this.onClose(e)} >
                <Modal.Header closeButton key="c3">
                    <Modal.Title>Create Community</Modal.Title>
                </Modal.Header>
                  <Modal.Body key="c1" className='p-3'>
                        <Paper className='p-4' elevation={12}>
                          
                          <TextField id="standard-outlined message" placeholder='Title '  variant="outlined" type='text'   name='card_title'  onChange={(e) => this.handleChange(e,'')} fullWidth /><br/><br/>
                          <TextField id='message' type='file' name='card_image' onChange={(e) => this.handleChange(e,'')} fullWidth required /><br/><br/>
                          <input   id='message' className='textfield p-2' placeholder='Your Toughts'   variant="outlined" type='text'  name='card_data'  onChange={(e) => this.handleChange(e,'')} fullWidth required/>
                        </Paper>
                  </Modal.Body>
                    <Modal.Footer key="c2">
                      <Button className="bl-btn2-ol" variant="secondary" onClick={(e)=>this.onClose(e)}>
                        Close
                      </Button>
                      <button className="btn btn-outline-success" type=" submit" id="submit"  disabled={message==''}   onClick={(e)=>this.submitCardForm(e)}>
                        submit
                      </button>
                    </Modal.Footer> 
              </Modal>
             ]
        }
      </div>
    )
  }
}