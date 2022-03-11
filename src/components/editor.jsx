import React, { Component } from "react";
import Tips from "./tips";
import "../style.css";

class Editor extends React.Component {
  render() {
    const { markdownSample, windowManager, onChange, onClick } = this.props;
    return (
      <div id={windowManager[0][0]}>
        <h2 className="sub-title">
          <i className="fas fa-user-edit"></i>
          &nbsp;Editor
          <i
            className={windowManager[0][1]}
            id="maximizer-editorIcon"
            onClick={onClick}
          ></i>
        </h2>
        <textarea
          className="textarea"
          name="inputText"
          id="editor"
          onChange={onChange}
          value={markdownSample}
        ></textarea>
        <Tips />
      </div>
    );
  }
}

export default Editor;
