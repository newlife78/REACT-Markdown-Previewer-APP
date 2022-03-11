import React, { Component } from "react";
import "../style.css";

const tipList = [
  { tip: 1, value: "Use # before text to create an H1" },
  { tip: 2, value: "Use ## before text to create an H2" },
  { tip: 3, value: "Use > to create a blockquote" },
  { tip: 4, value: "Wrap text with * * or __ __ to make it italic" },
  { tip: 5, value: "Wrap text with ** ** to make it bold" },
  { tip: 6, value: "Wrap code inside ```` ``` to make a code block" },
  { tip: 7, value: "Use * before text to create an unordered list" },
];

class Tips extends React.Component {
  constructor() {
    super();
    this.state = {
      tip: tipList[0].value,
    };
    this.handleTipChange = this.handleTipChange.bind(this);
  }

  handleTipChange() {
    let randomTipIndex = Math.floor(Math.random() * tipList.length);
    let randomTip = tipList[randomTipIndex].value;
    this.setState({
      tip: randomTip,
    });
  }

  componentDidMount() {
    let newTip = setInterval(this.handleTipChange, 3000);
    this.setState({
      tip: newTip,
    });
  }

  render() {
    const { tip } = this.state;

    return (
      <div id="container-tips">
        <span>
          <b>Tip:</b>&nbsp;&nbsp;&nbsp;{tip}
        </span>
      </div>
    );
  }
}

export default Tips;
