import { useState } from 'react';
import './App.css';
import Header from './conponents/Header';
import Contact from './conponents/Contact';
import BlogPage from './conponents/BlogPage';
import HomePage from './conponents/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './conponents/Sidebar';

function App() {
  const [open, setOpen] = useState(true);
  const toggle = () => { setOpen(!open) };

  return (
    <div className="App" id="outer-container">
      <Header />
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Routes>
          <Route path="/" element={<HomePage open={open} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
