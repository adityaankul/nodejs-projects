import logo from './logo.svg';
import './App.css';
import Greet from './components/1.functional/Greet'
import Welcome from './1.components/2.class/Welcome';
import Parent from './1.components/5.event-handling.js/parent-child/Parent';
function App() {
  return (
    <div className="container" >
    <Parent />
    
    /* <h1>Welcome to react development</h1>
      <Greet />
      <Named />
      <Welcome />
      <Message />

    </div>
  );
}

export default App;
