// import logo from './google.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./google.png" alt="logo"  class="App-logo"/>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
        <img src="./chatgpt.jpg"  alt="logo" class="App-logo" />
        <a
          className="App-link"
          href="https://chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
       Chatgpt
        </a>
        <img src="./gmail.jpeg"  alt="logo" class="App-logo" />
        <a
          className="App-link"
          href="https://gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
     gmail
        </a>
      </header>
    </div>
  );
}

export default App;
