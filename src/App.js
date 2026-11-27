import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Device from './components/Device';
import Age from './components/Age';
import Download from './components/Download';
import AppSection from './components/AppSection';
import People from './components/People';

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
      <People />
    </div>
  );
}

export default App;
