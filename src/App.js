import React from 'react';
import './App.css';
import './containers/DrumMachine'
import './containers/Credits'
import DrumMachine from "./containers/DrumMachine";
import Credits from "./containers/Credits";

function App() {

  return (
      <div className={'wrapper'}>
        <DrumMachine />
        <Credits />
      </div>
  );
}

export default App;
