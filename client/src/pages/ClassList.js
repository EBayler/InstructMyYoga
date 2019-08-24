
import React from "react";
import { withRouter } from "react-router-dom";
import ClassCard from "../components/ClassCard"

const ClassList = (props) => {
   console.log(props.classes);
   console.log(props.classes.length);

  const handleClick = (id) => {
    console.log(props);
    console.log(id);
    props.history.push({
      pathname: '/class/' + id,
      state: {
        classId: id,
        userId: props.userId
      }
    })
  }

return (
  <div>
   { props.classes.length ? ( 
     <div>
      { props.classes.map(classToMap => (
        <ClassCard 
          key={classToMap.classId}
          classId={classToMap.classId}
          classTitle={classToMap.classTitle}
          onClick={(e) => handleClick(classToMap.classId)}
          userId={props.userId}
        >
        </ClassCard>
      ))}
      <ClassCard
        key={props.classes[props.classes.length +1]}
        classId={props.classes[props.classes.length +1]}
        classTitle={"Enter your class name here"}
        onClick={(e) => handleClick(props.classes.classId +1)}
        userId={props.userId}
      >+</ClassCard>
    </div>
  ) : (
    <div>
      <h3>You don't have any classes yet. Let's get Started!</h3>
      <ClassCard
      key={1}
      classId={1}
      classTitle={"Add a New Class"}
      onClick={(e) => handleClick(1)}
      userId={this.props.userId}
      >+</ClassCard>
    </div>
  )}
    
  </div>
  );
}

export default withRouter(ClassList);