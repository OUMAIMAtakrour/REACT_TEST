
// ternary operators
// CONDITIONAL RENDERING  = controlling components based on conditions

import PropTypes  from "prop-types"
function UserGreeting(props){
    // if(props.isLoggedIn){
    // return <h2>
    //     Welcome {props.username}
    // </h2>
    // }
   
    //     return <h2>Dear visitor login to continue</h2>

//    return (props.isLoggedIn ?
//     <h2 className="well"> Welcome {props.username}</h2> : 
//     <h2 className="not">Please login first</h2>)

    const well= <h2 className="well"> 
     Welcome {props.username}</h2> 

    const not =  <h2 className="not">
        Please login first</h2>


   return (props.isLoggedIn ? well
   : not
   )

    
   
}
UserGreeting.PropTypes={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest",
}
export default UserGreeting