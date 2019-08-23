import React from 'react';
import ReactDOM from "react-dom";
import dragula from "react-dragula";
import PoseCard from '../PoseCard';
import './style.css';

class Canvas extends React.Component{

  state = {
    classPoses: []
  }

  componentDidMount(){
    var container = ReactDOM.findDOMNode(this);
    dragula([container], {
      moves: true,
      accepts: function (el, target) {
        return target === document.getElementByClassName('draggable')
        }
      }
    );
    this.loadClassPoses()
    
  }

  loadClassPoses = () => {
    // Why does this log
    console.log(this.props.selectedClass)
    // but not this?  I need this.props.user.classes[@selectedClass].poses map through  
    // the chrome tool will log it just fine! WTF????
    // {
    //   "user": {
    //     "classes": [
    //       {
    //         "classId": 1,
    //         "classTitle": "Demo Class",
    //         "poses": [
    //           1,
    //           2,
    //           3,
    //           4,
    //           5,
    //           6
    //         ]
    //       }
    //     ],
    //     "_id": "5d5c9f1e0b3b86176091ddbb",
    //     "userName": "Demo User",
    //     "userImage": "https://lh4.googleusercontent.com/-Ya9AZqgHWV0/AAAAAAAAAAI/AAAAAAAAABs/LxYT6VoF_xM/s96-c/photo.jpg",
    //     "userId": "100263884732038911546"
    //   },
    //   "selectedClass": 0
    // }
    console.log(`in loadClassPoses ${this.props.user.userId}`) 
  }

  render(){
    return (
      <div id="canvas" className="Canvas">
        { 
          this.props.user ? (
            <h1>Class</h1>
            // this.props.poses.map(pose => (
            //   <PoseCard
            //     key={pose.name}
            //     name={pose.name}
            //     sanskrit={pose.sanskrit}
            //     image={pose.image}
            //     description={pose.description}
            //     difficulty={pose.difficulty}
            //     type={pose.type}
            //     benefits={pose.benefits}
            //   >{pose.name}</PoseCard>
            // ))
          ) : (
            <h1> Drag poses here to start building your class.</h1>
          )
      }
      </div>
    );
  }
}

export default Canvas;
