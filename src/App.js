import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Screen from './component/Appscreen';

function App() {
  return (
    <div className='bg-dark container-fluid'>
      <Screen />
    </div>
  );
}

export default App;