import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Device from './components/Device';
import Age from './components/Age';
import Download from './components/Download';
import AppSection from './components/AppSection';
import Cart from './components/Cart';

// array of objects, every object is one person
const allData = [
  { id: 1, firstName: 'Ahmed', lastName: 'Mahdy', color: 'black' },
  { id: 2, firstName: 'Youssef', lastName: 'Osama', color: 'white' },
  { id: 3, firstName: 'Mariam', lastName: 'Ali', color: 'green' },
  { id: 4, firstName: 'Jana', lastName: 'Omar', color: 'blue' },
  { id: 5, firstName: 'Hana', lastName: 'Mohamed', color: 'yellow' },
];

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
      {/* we send the array to Cart as a prop */}
      <Cart allData={allData} />
    </div>
  );
}

export default App;
