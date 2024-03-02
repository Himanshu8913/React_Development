import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// JSX(transpiled before it reaches the JS) - PARCEL -> Babel
// JSX(convert by Babel) => React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Heading using JSX 🎉</h1>;

// React Functional Component
const Title = () => (
  // as its returning 1 liner so no need to add return keyword.
    <h1>This is Title Component</h1>
);

const HeadingComponent = () => {
    return (
    <div>
        <Title />
        <h1 id="heading">This is h1 tag in functional component.</h1>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
