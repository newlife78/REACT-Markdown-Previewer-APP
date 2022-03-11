// NPM packages:
// npm install react-markdown
// npm install highlight.js

// Extensions:
// Live Sass Compiler

// Marked.JS official links:
// 'Marked.JS': https://marked.js.org/
// 'Advence Marked.JS': https://marked.js.org/using_advanced

// Reactjs.org: https://reactjs.org/docs/dom-elements.html

// Highlightjs official site:
// 'Highlightjs.org': https://highlightjs.org/download/
// 'Highlightjs.org USAGE': https://highlightjs.org/usage/

import React, { Component } from "react";
import Editor from "./components/editor";
import Previewer from "./components/previewer";
import "./style.css";

const placeholder = `# React Markdown Previewer

## Fast HTML Layout Previewer

---

> This is a blockquote

---

*This text* is italic

**This text** is bold

**_This text_** is italic and bold

~~This text~~ is strikethrough

---

HTML elements:

\`<div></div>\`

---

Code block:
* Use three (\`)
* After indicate the language name (bash, javascrip, java, python, ...)

\`\`\`bash
npm install

npm start
\`\`\`

---

Javascript code block:

\`\`\`javascript
function add(num1, num2) {
  return num1 + num2;
}
\`\`\`

Java code block:

\`\`\`java
public class Main {
  public static void main(String[] args) {
    int x = 7;
    int y = 10;
    int sum = x + y;
    System.out.println(sum);
  }
}
\`\`\`

---
Order Lists:

1. Item 1
1. Item 2
1. Item 3

Unordered Lists:

* Item 1
* Item 2
* Item 3
  * Nested Item A
  * Nested Item B

---

Tables:

Header 1  | Header 2  | Header 3
--        | --        | --
Content 1 | Content 2 | Content 3
Content 4 | Content 5 | Content 6

---

Link:

[marked.js.org](https://marked.js.org/)

[marked.js.org/using_pro](https://marked.js.org/using_pro)

---

Images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownSample: placeholder,
      screenEditorMaximized: false,
      screenPreviewerMaximized: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximizer = this.handleEditorMaximizer.bind(this);
    this.handlePreviewerMaximizer = this.handlePreviewerMaximizer.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdownSample: event.target.value,
    });
  }

  handleEditorMaximizer() {
    this.setState({
      screenEditorMaximized: !this.state.screenEditorMaximized,
    });
  }

  handlePreviewerMaximizer() {
    this.setState({
      screenPreviewerMaximized: !this.state.screenPreviewerMaximized,
    });
  }

  render() {
    const windowManager = this.state.screenEditorMaximized
      ? [
          ["editorMaximized", "far fa-window-minimize"],
          ["previewerHide", "far fa-square"],
        ]
      : this.state.screenPreviewerMaximized
      ? [
          ["editorHide", "far fa-square"],
          ["previewerMaximized", "far fa-window-minimize"],
        ]
      : [
          ["container-editor", "far fa-square"],
          ["container-previewer", "far fa-square"],
        ];

    return (
      <React.Fragment>
        <div id="container-app">
          <h1 id="main-title">Markdown Previewer</h1>
          <div id="container-markdown">
            <Editor
              markdownSample={this.state.markdownSample}
              windowManager={windowManager}
              onChange={this.handleChange}
              onClick={this.handleEditorMaximizer}
            />
            <Previewer
              markdownSample={this.state.markdownSample}
              windowManager={windowManager}
              onClick={this.handlePreviewerMaximizer}
            />
          </div>
          <footer>
            <a href="https://codepen.io/new_life/full/wvebydP" target="_blank">
              &copy; Developed by Paulo Fidalgo
            </a>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
