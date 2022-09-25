import { React } from "react";
import "./App.css";
import Notes from "./Components/NoteComponents/Notes";
import CreateNote from "./CreateNote";
function App() {
  return (
    <div className="main">
      <Notes></Notes>
    </div>
  );
}
export default App;

{ /* <div>
<form>
<label for="fname">Paste paragraphs here: </label>

  <input type="text"></input>
  <br></br>
  <button onClick={handleClick} type="submit">Convert</button>
</form>
  
</div> */}