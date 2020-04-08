import React from 'react';
import AddCat from './components/AddCat';
import CatList from './components/CatList';

import './App.css';

function App() {
  return (
    <div className="App wrapper">
      <AddCat />
      <CatList />
    </div>
  );
}

export default App;
