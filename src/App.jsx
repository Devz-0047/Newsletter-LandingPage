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
    <div>
      <div>
        <Herosection/>
      </div>
      <div>
        <Description/>
      </div>
      <div>
        <Testimonials/>
      </div>
      <div>
        <Feature/>
      </div>
      <div>
        <CallToAction/>
      </div>
      <div>
        <Newsletter/>
      </div>
      <div>
        <Blog/>
      </div>
      <div>
        <Footer/>
      </div>

  
    </div>
  )
}

export default App
