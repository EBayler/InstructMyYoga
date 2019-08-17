import React from 'react';
import PoseCard from '../PoseCard';
import './style.css';

class Poses extends React.Component {

  componentDidMount(){
    console.log("Poses Component Mounted");
    // var container = ReactDOM.findDOMNode(this);
    // console.log(container);
    // dragula([container], {
    //   mirrorContainer: document.body
    // }); 
  }
   
  render(){
    return (
      <div id="idTest" className="draggable">
        { 
          this.props.poses.length ? (
            this.props.poses.map(pose => (
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
          ) : (
            <h1> Database Connection has been lost.</h1>
          )
      }
      </div>);
  }
  
}

export default Poses;