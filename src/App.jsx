import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import ServiceSection from './components/servicesSection';
import FAQSection from './components/faqSection';
import Footer from './components/footer';

function App() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <HeroSection />
            <ServiceSection />
            <FAQSection />
            <Footer />
        </div>
    );
}

export default App;
