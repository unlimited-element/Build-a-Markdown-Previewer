import React from "react";
import marked from "marked";

const Previewer = ({ text }) => {
  const getMarkdownText = () => {
    let rawMarkup = marked(text, { sanitize: true });
    return { __html: rawMarkup } || marked.setOptions({
  breaks: true
});
  };

  return (
    <div className="preview-holder">
      <header>
        <h2>Preview</h2>
      </header>
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
    </div>
  );
};

export default Previewer;
