import React from 'react'
import Main from './Main'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
    <ParallaxProvider>
    <Main/>
    </ParallaxProvider>
    </div>
  );
}

export default App;
