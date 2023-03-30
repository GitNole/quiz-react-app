import { useState } from 'react';
import './App.css';
import { EndScreen } from './Components/EndScreen';
import { MainMenu } from "./Components/MainMenu";
import { Quiz } from './Components/Quiz';


function App() {
  const[gameState, setGameAtate] = useState('menu');

  return (
    <div className="App">
      <h1>Quiz app</h1>
      {gameState === 'menu' && <MainMenu />}
      {gameState === 'quiz' && <Quiz />}
      {gameState === 'endScreen' && <EndScreen />}
    </div>
  );
}

export default App;
