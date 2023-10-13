import logo from './logo.svg';
import coffee from './coffee.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={coffee} className="App-logo" alt="logo" />
        <p>
          I have edited <code>src/App.js</code> and saved the changes.
        </p>
        <a
          className="App-link"
          href="https://support.google.com/websearch/answer/134479?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn How to Google
        </a>
      </header>
    </div>
  );
}

export default App;
