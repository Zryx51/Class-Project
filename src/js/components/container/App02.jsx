// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
let test = function () {
  console.log("test")
  let canvas = document.getElementById("canvas")

}

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>My View 02</h1>
      </div>
    );
  }
}


// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
