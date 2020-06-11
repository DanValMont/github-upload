MarkdownPreviewer = () => {

  let [initialValue, setMarkdown] = React.useState(`# Welcome to my customized React Markdown Previewer!

# This is a h1 heading

## This is a h2 heading

**This is a BOLD text**

This markdown can also display a [link](https://www.freecodecamp.com)

It also displays a

> Blockquote

This is a code \`<div></div>\` as you can see

\`\`\` 
// this is multiline code
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- You can make a list item:
  - 1st item
    - 2nd item 
      - 3th item and so on...

and last but not least, it also displays images:
![react logo](https://goo.gl/Umyytc)`);

  return React.createElement("div", { id: "wrapper" },
  React.createElement("div", { id: "toolbar" }, React.createElement("i", { class: "far fa-edit" }), " Editor"),
  React.createElement("textarea", { id: "editor", onChange: e => setMarkdown(e.target.value), value: initialValue }),
  React.createElement("div", { id: "toolbar-preview" }, React.createElement("i", { class: "far fa-eye" }), " Previewer"),
  React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(initialValue, { breaks: true }) } }));

};
ReactDOM.render(React.createElement(MarkdownPreviewer, null), document.getElementById('root'));


// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.