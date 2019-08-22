
import React from "react";
import ClassCard from "../components/ClassCard"

// Discuss with Adam:
// I need to be able to handle an onclick, does this need to be a stateful component?  How do I get the ID of the one clicked?  

const ClassList = (props) => {
   console.log(props.classes[0]);
   console.log(props.classes.length);

   const handleClick = (id) => {
    console.log(`You just clicked ${id}`)
    //  console.log(`You just clicked ${this.getOwnPropertyNames(this)}`)

   }

return (
  <div>
   { props.classes.length ? ( 
     <div>
      { props.classes.map(classToMap => (
        <ClassCard 
          key={classToMap.classId}
          classTitle={classToMap.classTitle}
          onClick={(e) => handleClick(classToMap.classId)}
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