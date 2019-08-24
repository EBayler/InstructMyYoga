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
  }

  render(){
    return (
      <div id="canvas" className="Canvas">
        {/*
          this.props.user ? (
            <div>
              <h1>Class</h1>
              this.props.user.classes[this.props.selectedClass].poses.(pose => (
                  <PoseCard
                    key={pose.name}
                    name={pose.name}
                    sanskrit={pose.sanskrit}
                    image={pose.image}
                    description={pose.description}
                    difficulty={pose.difficulty}
                    type={pose.type}
                    benefits={pose.benefits}
                  >{pose.name}</PoseCard>
                ))
              )
              {/*
                this.props.user.classes[this.props.selectedClass].poses.map(pose => (
                <PoseCard
                  key={pose.name}
                  name={pose.name}
                  sanskrit={pose.sanskrit}
                  image={pose.image}
                  description={pose.description}
                  difficulty={pose.difficulty}
                  type={pose.type}
                  benefits={pose.benefits}
                >{pose.name}</PoseCard>
              ))
              
            </div>
          ) : (
            <h1> Drag poses here to start building your class.</h1>
          )
          }
            */}
      </div>
    );
  }
}

export default Canvas;
