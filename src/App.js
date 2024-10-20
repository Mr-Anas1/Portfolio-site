import './App.css';
import Navbar from './Components/Common/Navbar/Navbar';
import Hero from './Components/Common/Hero/Hero'
import About from './Components/Common/About/About';
import Works from './Components/Common/Works/Works';
import Contact from './Components/Common/Contact/Contact';
import Footer from './Components/Common/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="works"><Works /></section>
        <section id="contact"><Contact /></section>
        <Footer />
    </div>
  );
}

export default App;
