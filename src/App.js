import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer aviso="Site under construction"/>
    </div>
  );
}

export default App;
