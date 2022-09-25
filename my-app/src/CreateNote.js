import { React } from "react";
function CreateNote({ textHandler, saveHandler, inputText }) {

    //character limit
    const charLimit = 3000;
    const charLeft = charLimit - inputText.length;

  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="paste your paragraphs here: "
        onChange={textHandler}
        maxLength="3000"
      ></textarea>
      <div className="note__footer">
      <span className="label">{charLeft} characters left  </span>
        <button className="note__save" onClick={saveHandler} >Convert</button>
      </div>
    </div>
  );
}

export default CreateNote;