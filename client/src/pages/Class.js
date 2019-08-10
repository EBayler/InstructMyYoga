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
        { 
          this.state.poses.length ? (
            this.state.poses.map(pose => (
              <PoseCard
                name={pose.name}
                sanskrit={pose.sanskrit}
                image={pose.image}
                description={pose.description}
                difficulty={pose.difficulty}
                type={pose.type}
                benefits={pose.benefits}
              >{pose.name}</PoseCard>
            ))
          ) : (
            <h1> No Poses Were Found </h1>
          )
        }
      </div> 
    );
  }

}

export default Class;