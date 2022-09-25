import {useState} from 'react';
import './App.css';

function App() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <form>
          <label for="fname">Paste paragraphs here: </label>

            <input type="text"></input>
            <br></br>
            <button onClick={handleClick} type="submit">Convert</button>
          </form>

          {/* show elements on click */}
{/*}            {isShown && (
              <div>
                <p>content shown here</p>
              </div>
)} */}

            {/* show component on click */}
            {isShown && <gistOutput />}
            
          </div>
      </header>
    </div>
  );
}

function gistOutput() {
  return (
    <div>
      <p>Content</p>
    </div>
  )
}

export default App;