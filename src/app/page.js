import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import About from '../components/About';
import Explore from '../components/Explore';
import GetStarted from '../components/GetStarted';
import WhatsNew from '../components/WhatsNew';
import World from '../components/World';
import Insights from '../components/Insights';
import Feedback from '../components/Feedback';
import Hero from '@/components/Hero';


export default function Home() {
  return (
    <main className=' bg-primary-black overflow-hidden'>
      <div>
        <Navbar />
        <Hero />
        <div className='relative'>

          <About />
          <div className='gradient-03 z-0' />
          <Explore />
        </div>

        <div className='relative'>

          <GetStarted />
          <div className='gradient-04 z-0' />
          <WhatsNew />
        </div>
{/* 
        <World />

        <div className='relative'>

          <Insights />
          <div className='gradient-04 z-0' />
          <Feedback />
        </div>
        <Footer /> */}

      </div>
    </main>
  )
}
