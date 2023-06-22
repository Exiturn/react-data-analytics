import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";

import './index.css';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Pricing />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
