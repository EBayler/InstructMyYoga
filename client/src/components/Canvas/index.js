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
      copy: function (el, source) {
        return source === document.getElementsByClassName('draggable')
        },
      accepts: function (el, target) {
        return target !== document.getElementByClassName('draggable')
        }
      }
    ); 
  }

  render(){
    return (
      <div className="Canvas">
      <h2 className="classTitle" contenteditable="true">Add Your Class Name Here</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Canvas;
