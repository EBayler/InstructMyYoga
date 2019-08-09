import React, { Component } from 'react';
import PoseCard from '../components/PoseCard'
import API from "../utils/API";

class Class extends Component {

  state = {
    poses: []
  }

  componentDidMount(){
    this.loadPoses();
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
      <div>
        <PoseCard>This is a PoseCard .children prop</PoseCard>
      </div>
      
    );
  }

}

export default Class;