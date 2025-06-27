import React from "react";
import ReactDOM from "react-dom/client";




// JSX Element => looks like html syntax => Parcel - Babel => transpiles => React Element => Js Object => HTML element (render)


// React Element
const jsxHeading = <h1>Namaste React Using JSX</h1>

// React Component

// React functional Component
// a function that returns jsx code = FC

// nested components => component composition

// every thing in react is just components


const HeadingComponent = () => {
    return (
     <div>         
        <h1>Functional Component</h1>  
        <ParagraphComponent/>
    </div>   
    )
}
const ParagraphComponent = () => <p>I am also Same</p>


// Root Element
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<HeadingComponent/>)
