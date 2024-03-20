// props= read only properties that are shared between components
// A parent component can send data to a child component.
//          <Component key=value/>

// prop types= mechanism that ensures that the 
// passed value is of the correct datatype.

// default props: default values that are passed in case
// the parent component failed to pass the data

import PropTypes from "prop-types"
import { Component } from "react"
function Student(props){
return(
    <div className="student">
        <p>
            Name:{props.name}
        </p>
        <p>
            Age:{props.age}
        </p>
        <p>
            Student:{props.isStudent ? "yes" :"no"}
        </p>
    </div>
)
}
Student.prototypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}
Student.defaultProps={
    name:"guest",
    age:"20",
    isStudent:true,
}
export default Student