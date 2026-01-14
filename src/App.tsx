import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Products from './components/Products'
import Brands from './components/Brands'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyChooseUs />
        <Products />
        <Brands />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
