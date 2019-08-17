import React, { Component } from 'react';
import dragula from "react-dragula";
import Canvas from '../components/Canvas';
import Poses from '../components/Poses'
import API from "../utils/API";
import './style.css'

class Class extends Component {

  state = {
    nameOfClass: "",
    poses: [],
  }

  componentDidMount(){
    this.loadPoses();
    var idTest = document.getElementById('idTest');
    var canvasIdTest = document.getElementById('canvas');
    var dragFrom = idTest;
    var dragTo = canvasIdTest;
    // var dragTo = document.getElementsByClassName('canvas')
    console.log(dragFrom);
    console.log(dragTo);
    dragula([dragFrom, dragTo], {
      copy: function (el, source) {
        console.log(`${el} is being copied`);
        return source === dragFrom;
      },
      accepts: function (el, target) {
        //  console.log(el);
        return target !== dragFrom;
      }
    }); 
  }


  loadPoses = () => {
    API.getPoses()
    .then(res => {
      this.setState({
        poses: res.data
      }) 
      console.log(this.state.poses);
    });
  }
  render(){
    return (
      <div className="Everything">
         <div id="text-area">
          <form id="noter-save-form" method="POST">
        <textarea id="noter-text-area" name="textarea" placeholder="Your Class Name" value={this.state.value} onChange={this.handleChange} /> 
        </form>
      </div>
      <div className="flex-container ">
        <div className="poses">
          <Poses poses={this.state.poses}/>
        </div>
        <div className="canvas">
        <Canvas></Canvas>
        </div>  
        </div> 
        </div>
    );
  }

}

export default Class;