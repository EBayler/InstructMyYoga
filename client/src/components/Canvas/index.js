import React from 'react';
import ReactDOM from "react-dom";
import dragula from "react-dragula";
// import { Text, TextInput, View } from 'react-native';
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
  }


  render(){
    return (
      <div id="canvas" className="Canvas">
        {this.props.children}
      </div>
    );
  }
}

export default Canvas;
