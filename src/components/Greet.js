import React from "react";

// function Greet() {
//     return <h1>Hello Ronit</h1>
// }

const Greet = (props) => {
// const Greet = ({name, heroName}) => {
    const {name, heroName} = props
    // console.log(props)
    return (
        <div>
            {/* <h1> Hello {props.name} aka {props.heroName}</h1> */}
            <h1> Hello {name} aka {heroName}</h1>
            {/* {props.children} */}
        </div>
        
    )
}

// export const Greet =()=> <h1> Hello Ronit! </h1>;         // named export - we need to import the component with same name

export default Greet;   // we are exporting greet with default so we can import greet with any name