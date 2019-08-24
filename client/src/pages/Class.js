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
 
  componentDidMount() {
    this.loadPoses();
    this.loadClassPoses()
    console.log(`The following class will be used ${this.props.match.params.id}`)
    console.log(`The following props are available for use: ${this.props.location.state.userId}`)
    var idTest = document.getElementById('idTest');
    var canvas = document.getElementById('canvas');
    var dragFrom = idTest;
    var dragTo = canvas;
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
  
  updateUserObject(){
    var posesArray = []
    for(let i=0; i < this.state.poses.length; i++){
      for(let n=0; n < this.state.classPoses.length; n++){
        if(parseInt(this.state.poses[n].poseId)===parseInt(this.state.classPoses[i])){
          posesArray.push(this.state.poses[n])
        }
      }    
    }

    this.setState( prevState => {
      let userObject = Object.assign({}, prevState.userObject);
      userObject.classes[this.state.classId -1 ] = posesArray;
      return { userObject };
      })

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
    if (this.state.classId !="") {
    console.log(`User Id state = ${this.state.userId}`);
    console.log(`Class Id state = ${this.state.classId}`);
      API.getClassPoses(this.props.location.state.userId, this.props.match.params.id)
      .then(res => {
        console.log(res)
        let posesToLoad = res.data.classes[this.state.classId -1].poses;
        console.log(posesToLoad);
        this.setState({
          classPoses: posesToLoad,
          userObject: res.data
        })
        console.log(this.state.poses)
        console.log(this.state.classPoses);
        console.log(this.state.userObject);
        this.updateUserObject();
        console.log(this.state.userObject.classes[this.state.classId - 1]);
      })
    } else {
      console.log ("New Class!")
    } 
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
            {console.log(this.state.userObject)}
            <Poses poses={this.state.poses}/>
          <Canvas 
            user={this.state.userObject}
            selectedClass={this.state.classId - 1}
          ></Canvas>
          </div>  
        </div> 
      </div>
    );
  }

}

export default Class;