import React from "react";

function About(props) {
    console.log(props)
    return (
      <aside>
        <img src={props.image}/>
        <p>{props.about}</p>
      </aside>)
    
}

export default About;