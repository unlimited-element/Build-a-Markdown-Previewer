import React from "react";

const Editor = ({ textChange, text }) => {
  const handleChange = (value) => {
    textChange(value);
  };


  return (
    <div className="input-holder">
      <header>
        <h1>Editor</h1>
      </header>
      <textarea
        id="editor"
        name="editor"
        onChange={(event) => handleChange(event.target.value)}
        value={text}
      ></textarea>
    </div>
  );
};

export default Editor;
