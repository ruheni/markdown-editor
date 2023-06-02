import React, { useState, useEffect } from "react";

export default function Editor({editorContent, setEditorContent}) {
 
  const handleChange = (event) => {
    setEditorContent(event.target.value);
  };
  useEffect(() => {
    // placeholder for now - to be retrieved from the db initially.
    // could change to retrieve from data.json but looking more full-stack than that...
    fetch('/path-to-your-file.txt')
      .then(response => response.text())
      .then(data => {
        setEditorContent(data);
      });
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center font-r-reg font-medium h-[42px] bg-[#1D1F22] p-4 text-sm tracking-[2px]">
        MARKDOWN
      </div>
      <textarea
        className="font-r-mono font-normal text-sm -tracking-normal w-full h-full resize-none bg-[#151619] focus:outline-none p-4"
        value={editorContent}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
