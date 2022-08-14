import { useState } from 'react';
import './App.css';
import Header from './conponents/Header';
import Contact from './conponents/Contact';
import BlogPage from './conponents/BlogPage';
import HomePage from './conponents/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App
