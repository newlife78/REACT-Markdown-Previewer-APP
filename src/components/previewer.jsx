import React, { Component } from "react";
import "../style.css";
import { marked } from "marked";

marked.setOptions({
  renderer: new marked.Renderer(),
  //highlight: function (code, lang) {
  //  const hljs = require("highlight.js");
  //  const language = hljs.getLanguage(lang) ? lang : "plaintext";
  //  return hljs.highlight(code, { language }).value;
  //},
  //langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
  highlight: function (code) {
    const hljs = require("highlight.js");
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  tables: true,
});

class Previewer extends React.Component {
  render() {
    const { markdownSample, windowManager, onClick } = this.props;

    return (
      <div id={windowManager[1][0]}>
        <h2 className="sub-title">
          <i className="fab fa-html5"></i>
          &nbsp;Previewer
          <i
            className={windowManager[1][1]}
            id="maximizer-previewIcon"
            onClick={onClick}
          ></i>
        </h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdownSample),
          }}
        />
      </div>
    );
  }
}

export default Previewer;
