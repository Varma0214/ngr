import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './chatbot/Chatbot';

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer/>
      <Chatbot />
    </>
  );
}

export default App;
