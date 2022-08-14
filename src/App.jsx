import { useState } from 'react';
import './App.css';
import Header from './conponents/Header';
import Contact from './conponents/Contact';
import BlogPage from './conponents/BlogPage';
import HomePage from './conponents/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [open, setOpen] = useState(true);
  const toggle = () => { setOpen(!open) };

  return (
    <div className="App">
      <Header
        open={open}
        toggle={toggle}
      />
      <Routes>
        <Route path="/" element={<HomePage open={open} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App
