import Horned from "./hornedbeast";
import React from "react";





class Main extends React.Component{

    

    
    render(){
               
      let myJson = this.props.myData.filter(value=> value['horns'] === parseInt(this.props.hornsNumber) ); //import json from App
      return ( <div id='hornesCard'>  {myJson.map((value, i) => 
      <Horned   show_Info={this.props.showInfo}  name={myJson[i]['title']} discr={myJson[i]["description"]} imgUrl={myJson[i]['image_url']} />)}
      </div>)

}
}

export default Main;

