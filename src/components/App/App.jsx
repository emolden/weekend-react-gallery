import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList.jsx";
import './App.css';


function App() {
    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
        <GalleryList />
       
      </div>
    );
}

export default App;
