import './App.css';
import Main from './main';
import React from 'react';
import jsonData from './data.json';
import SelectedBeast from './selectedbeast';
import FormList from './form';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{


  constructor(props){

    super(props);
    this.state={

      show: false,
      Beast:{},
      display:1,
    
      

  }};

  GetHorns=(horns)=>{
 
    this.setState({
      display:horns
    })

  }
  
  handleClose=()=>{
    this.setState({
      show:false
      
    });
  }


  myFunction=(title)=>{

    const findBeast=jsonData.find(value=> value["title"] === title) 

    this.setState({
      show:true,
      Beast:findBeast
      
    })
  };
 

  render(){

    
    return(
      <>  
   
    <FormList selectHorns={this.GetHorns}  />
    <Main showInfo={this.myFunction}   myData={jsonData}  hornsNumber={this.state.display} />
    <SelectedBeast show={this.state.show}  closeShow={this.handleClose} information={this.state.Beast} />
    
    
      </>)
  }
 
}



export default App;
