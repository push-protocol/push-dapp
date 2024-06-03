// Usage:
//   create component file (e.g. BlockiesIdenticon.js) using uncommented code below
//   npm install blockies-identicon
//   in the file you want to use the component (e.g. BlockiesIdenticon.js):
//   import Blockies from "blockies/react-component";
//   <Blockies opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}}/>

// React + Web3 Essentials
import React from 'react';

// Internal Components
import blockies from "./blockies";

export default class BlockiesIdenticon extends React.Component {
  constructor(props) {
    super(props);
  }
  getOpts () {
    return {
      seed: this.props.opts.seed || "foo",
      color: this.props.opts.color || "#dfe",
      bgcolor: this.props.opts.bgcolor || "#a71",
      size: this.props.opts.size || 15,
      scale: this.props.opts.scale || 3,
      spotcolor: this.props.opts.spotcolor || "#000"
    };
  }
  componentDidMount() {
    this.draw();
  }
  componentDidUpdate(prevProps) {
    // Check for prop change
    if (this.props.seed !== prevProps.seed) {
      this.draw();
    }
  }
  draw() {
    blockies.render({
      seed: this.props.opts.seed,
      size: this.props.opts.size,
      scale: this.props.opts.scale
    }, this.canvas);
  }
  render() {
    return React.createElement("canvas", {ref: canvas => this.canvas = canvas});
  }
}
