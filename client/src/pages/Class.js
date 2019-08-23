import React, { Component } from 'react';
import dragula from "react-dragula";
import Canvas from '../components/Canvas';
import Poses from '../components/Poses'
import API from "../utils/API";
import './style.css'

class Class extends Component {

  state = {
    nameOfClass: "Enter your class name here",
    poses: [],
    userId: "",
    classId: "",
    classPoses: [],
    userObject: null
  }
  componentWillMount(){
    this.setState({
      userId: this.props.location.state.userId,
      classId: this.props.match.params.id
      }
    );
  }
  componentDidMount(){
    this.loadPoses();
    this.loadClassPoses()
    var idTest = document.getElementById('idTest');
    var canvas = document.getElementById('canvas');
    var dragFrom = idTest;
    var dragTo = canvas;
    console.log(`The following props are available for use: ${this.props.match.params.id}`)
    console.log(`The following props are available for use: ${this.props.location.state.userId}`)    
    

    dragula([dragFrom, dragTo], {
      copy: function (el, source) {
        console.log(`${el} is being copied`);
        return source === dragFrom;
      },
      accepts: function (el, target) {
        return target !== dragFrom;
      },
      direction: 'horizontal'
    }); 
  }

  loadPoses = () => {
    API.getPoses()
    .then(res => {
      this.setState({
        poses: res.data
      }) 
    });
  }

  loadClassPoses = () => {
    console.log(`User Id state = ${this.state.userId}`);
    console.log(`Class Id state = ${this.state.classId}`);
    API.getClassPoses(this.state.userId, this.state.classId)
    .then(res => {
      let posesToLoad = res.data.classes[this.state.classId -1].poses;
      console.log(posesToLoad);
      this.setState({
        classPoses: posesToLoad,
        userObject: res.data
      })
      console.log(this.state.classPoses);
      console.log(this.state.userObject);
    })
  }

  render(){
    return (
      <div className="Everything">
        <div id="text-area">
          <form id="noter-save-form" method="POST">
        <textarea id="noter-text-area" name="textarea" placeholder={this.state.nameOfClass} value={this.state.value} onChange={this.handleChange} /> 
        </form>
        </div>
        <div className="flex-container ">
          <div className="poses">
            <Poses poses={this.state.poses}/>
          </div>
          <div className="canvas">
          {  this.state.userObject && 
          <Canvas 
            user={this.state.userObject}
            selectedClass={this.state.classId - 1}
          ></Canvas>}
          </div>  
        </div> 
      </div>
    );
  }

}

export default Class;