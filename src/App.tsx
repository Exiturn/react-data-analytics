import Navbar from './components/Navbar'

import './index.css';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Pricing from './components/Pricing';

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Pricing />
    </div>
  )
}

export default App
