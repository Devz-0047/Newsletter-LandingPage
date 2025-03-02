import './App.css';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';
import Description from './components/Description';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
function App() {
 

  return (
    <div className='overflow-x-hidden'>
       
        <Herosection/>
        <Description/>
        <Testimonials/>
        <Feature/>
        <CallToAction/>
        <Newsletter/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
