
import React from 'react';
import Form from 'react-bootstrap/Form';

class FormList extends React.Component{


    handeltheChange=(event)=>{

    event.preventDefault();
       
    this.props.selectHorns(event.target.value)
      
    }
        
   render(){

         return( 
         
         <Form.Select aria-label="Default select example"  onChange={this.handeltheChange} >
        <option>Select 🦏 Number</option>
        <option value="1">🦏 </option>
        <option value="2">🦏🦏 </option>
        <option value="3">🦏🦏🦏 </option>
        <option value="100">🦏🦏🦏🦏🦏🦏🦏🦏🦏🦏🦏🦏</option>

         </Form.Select>
        
     
        
         )
 } 
 

}


export default FormList;

