import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Horned extends React.Component{


    constructor(props){

      super(props);
      this.state={
        rate:'❤',
        
      }
    }

 


    render(){

      
        return (

          <>
          
    <Card style={{ width: '18rem' }}  >
      <Card.Img variant="top" src={this.props.imgUrl}   />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>
         {this.props.discr}

         <p>Love Rate: {this.state.rate} </p>
        </Card.Text>
        <Button  onClick={()=>this.setState({rate:this.state.rate + '❤' })} >I love it </Button>
        <Button  onClick={()=>this.props.show_Info(this.props.name)} >show info </Button>

        
      </Card.Body>
    </Card>
    </>
        
    )}

        

}

export default Horned;