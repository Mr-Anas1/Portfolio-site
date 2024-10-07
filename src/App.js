import './App.css';
import Navbar from './Components/Common/Navbar/Navbar';
import Hero from './Components/Common/Hero/Hero'
import About from './Components/Common/About/About';
import Works from './Components/Common/Works/Works';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Works />
    </div>
  );
}

export default App;
