
import './App.css';
import Dropdown from './Dropdown.jsx'
import { useState } from 'react';

import React from 'react';


function App() {
  const [selected, setSelected] = useState(" ");
  return (
    <div className="App">
      
      <Dropdown selected={ selected}  setselected ={setSelected} />
    </div>
  );
}

export default App;
