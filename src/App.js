import React from 'react';

import { AboutUs, Chef,FindUs,  Footer, Gallery, Header, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <AboutUs /> 
     <SpecialMenu />
     <Chef />
     {/* <Intro /> */}
     <Laurels />
     <Gallery />   
     <FindUs/>  
     <Footer />
     
    </div>
  );
}

export default App;
