import React from 'react';
import { Home } from './components/Home';
import { Services } from "./components/Services";
import { About } from './components/About';
import { Samples } from './components/Samples';
import { Contact } from "./components/Contact";
function App() {
  return (
    <div>
      <Home />
      <Services />
      <About />
      <Samples />
      <Contact />
    </div>
  );
}

export default App;
