import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Device from './components/Device';
import Age from './components/Age';
import Download from './components/Download';
import AppSection from './components/AppSection';

// the whole page is made of small components
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Device />
      <Age />
      <Download />
      <AppSection />
    </div>
  );
}

export default App;
