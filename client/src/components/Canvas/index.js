import React from 'react';
import ReactDOM from "react-dom";
import dragula from "react-dragula";
import './style.css';

class Canvas extends React.Component{

  state = {
    classPoses: []
  }

  componentDidMount(){
    var container = ReactDOM.findDOMNode(this);
    console.log(container);
    dragula([container], {
      moves: true,
      accepts: function (el, target) {
        return target === document.getElementByClassName('draggable')
        }
      }
    ); 
  }

  render(){
    return (
      <div id="canvas" className="Canvas">
        <h2 className="classTitle" contentEditable="true">Add Your Class Name Here</h2>
        {this.props.children}
        <h3>This is an h3</h3>
      </div>
    );
  }
}

export default Canvas;
