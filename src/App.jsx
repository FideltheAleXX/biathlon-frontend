import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Races from './components/Races/Races';
import RightSideBar from './components/RightSideBar/RightSideBar';
import Standings from './components/Standings/Standings';
import { menAthletes, womenAthletes } from '../public/data/athletes';
import { useState } from 'react';

function App() {
  const [isStandingsMenOpen, setStandingsMenOpen] = useState(false);
  const [isStandingsWomenOpen, setStandingsWomenOpen] = useState(false);

  return (
    <div className="container">
      <Header />
      <div className="score">
        <div className="mobile-actions">
          <button
            className="mobile-btn"
            onClick={() => setStandingsMenOpen(true)}
          >
            Men`s Score
          </button>
          <button
            className="mobile-btn"
            onClick={() => setStandingsWomenOpen(true)}
          >
            Women`s Score
          </button>
        </div>
        <div className="left-side">
          <Standings
            title="Men`s Score"
            athletes={menAthletes}
            isOpen={isStandingsMenOpen}
            setIsOpen={setStandingsMenOpen}
          />
          <LeftSideBar />
        </div>
        <Races className="races" />
        <div className="right-side">
          <Standings
            title="Women`s Score"
            athletes={womenAthletes}
            isOpen={isStandingsWomenOpen}
            setIsOpen={setStandingsWomenOpen}
          />
          <RightSideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
