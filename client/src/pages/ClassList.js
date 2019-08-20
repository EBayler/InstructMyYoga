
import React from "react";
import ClassCard from "../components/ClassCard"

const ClassList = (props) => {
   console.log(props.classes[0]);
   console.log(props.classes.length);

return (
  <div>
   { props.classes.length ? ( 
     <div>
      { props.classes.map(classToMap => (
        <ClassCard 
          key={classToMap.classTitle}
          classTitle={classToMap.classTitle}
        >
        </ClassCard>
      ))}
    </div>
  ) : (
    <h3>You don't have any classes yet. Let's get Started!</h3>
  )}
    <ClassCard>+</ClassCard>
  </div>
  );
}

export default ClassList;