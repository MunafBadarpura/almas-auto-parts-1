import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import ManufacturingCapabilities from '../components/ManufacturingCapabilities';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import Products from '../components/Products';
import Brands from '../components/Brands';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <About />
                <WhyChooseUs />
                <ManufacturingCapabilities />
                <WhoWeWorkWith />
                {/* <Products /> */}
                {/* <Brands /> */}
                {/* <Testimonials /> */}
                <Contact />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
