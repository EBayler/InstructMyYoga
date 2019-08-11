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
    dragula([document.getElementsByClassName("poses"), 
            document.getElementsByClassName("canvas")], {
      copy: function (el, source) {
        return source === document.getElementsByClassName('poses')
        },
      accepts: function (el, target) {
        return target !== document.getElementByClassName('poses')
        }
      }
    ); 
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
      <div className="flex-container ">
        <div className="poses">
          <Poses poses={this.state.poses}/>
        </div>
        <div className="canvas">
        <Canvas>This is the canvas.</Canvas>
        </div>  
      </div> 
    );
  }

}

export default Class;