import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Races from './components/Races/Races';
import Standings from './components/Standings/Standings';
import { menAthletes, womenAthletes } from '../public/data/athletes';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mobile-actions">
          <button className="mobile-btn">Men`s Score</button>
          <button className="mobile-btn">Women`s Score</button>
        </div>

        <Races />
      </div>
      <Footer />
    </>
  );
}

export default App;
