import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class SelectedBeast extends React.Component{
  


    render(){

     
      return (
        <>


      <Modal show={this.props.show} onHide={this.props.closeShow}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.information['title']}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {this.props.information['description']}   </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeShow}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
      );

    }



    
};


export default SelectedBeast;