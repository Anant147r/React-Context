import React, { createRef } from "react";
class CreateRef extends React.Component {
  constructor(props) {
    super(props);

    // Using createRef
    this.inputRef = createRef();

    // Using Callback ref
    this.cbRef = null;
  }
  setCBRef = (element) => {
    this.cbRef = element;
  };
  componentDidMount() {
    // console.log(this.inputRef.current);
    console.log(this.cbRef);
  }
  render() {
    return (
      <div>
        {/* <div ref={this.inputRef}>Create Ref</div> */}
        <div ref={this.setCBRef}> Callback ref</div>
      </div>
    );
  }
}
export default CreateRef;
