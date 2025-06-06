import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/home';

function App() {
  // you can remove count if not used
  return (
    <>
      <NavBar />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
