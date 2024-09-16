import { useEffect, useState } from 'react';
import './App.css';
import './Dropdown.css'; 
import Dropdown from './Dropdown'; 

function App() {
  const [meetingCode, setMeetingCode] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingCode(e.target.value);
  };

  const handleJoinMeeting = () => {
    alert(`Joining tournament with code: ${meetingCode}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src= '/images/updlogo.png' alt="Xcelerate Logo" />
          <h1>Xcelerate</h1>
        </div>
        {/* User Icon Dropdown */}
        <Dropdown />
      </header>

      <main className="main-content">
        <section className="meeting-section">
          <h2>Tournaments and Organizing events for everyone</h2>
          <p>
            Connect, collaborate, and create friends from anywhere with Xcelerate
          </p>
          <div className="action-buttons">
            <button className="new-tournament-button">Find Tournaments</button>
            <p>or</p>
            <div className="join-tournament">
              <input
                type="text"
                value={meetingCode}
                onChange={handleInputChange}
                placeholder="Enter a tournament code"
              />
              <button onClick={handleJoinMeeting}>Join</button>
            </div>
          </div>
          <a href="#" className="learn-more-link">Learn more about Xcelerate</a>
        </section>

        <section className="create-section">
          <img src= '/images/updword.png' alt="Event Background" />
          <div className="text-content">
            <h3>Want to try starting your own event?</h3>
            <p>Start making your own events.</p>
          </div>
          <button className="start-event-button">Start Event</button>
        </section>
      </main>
    </div>
  );
}

export default App;
