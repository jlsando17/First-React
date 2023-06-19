import logo from './logo.svg';
import './App.css';
import TareaComponent from '../src/Padre/Tarea.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <TareaComponent></TareaComponent>
      </header>
    </div>
  );
}

export default App;
