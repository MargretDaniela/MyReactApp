import React, { useState } from 'react';
import './App.css';
import Greet from './Greet';
import Form from './Form';
import Goal from './Goal';
import Parking from './Parking';

// Car component
function Car(props) {
  const isParked = props.status === 'parked';
  return (
    <li>
      I am a {props.brand}
      {isParked ? (
        <span style={{ color: 'green' }}> (Parked)</span>
      ) : (
        <span style={{ color: 'orange' }}> (In Use)</span>
      )}
    </li>
  );
}

function App() {
  const [view, setView] = useState('home');
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Welcome to My React Projects</h1>

      {/* Navigation Buttons */}
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('greet')}>Greet Users</button>
        <button onClick={() => setView('registration')}>Registration Form</button>
        <button onClick={() => setView('goals')}>Goal Tracker</button>
        <button onClick={() => setView('parking')}>Parking Lot</button>
        <button onClick={() => setView('cars')}>Car Status</button>
      </nav>

      {/* Conditional Views */}
      {view === 'greet' && (
        <>
          <Greet name="Daniela" age="24" address="Wakiso" />
          <Greet name="Margret" age="20" address="Mbarara" />
          <Greet name="Lidia" age="25" address="Kabale" />
          <Greet name="Margie" age="26" address="Jinja" />
        </>
      )}

      {view === 'registration' && <Form />}

      {view === 'goals' && (
        <div>
          <Goal onAddGoal={handleAddGoal} />
          <ul>
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      )}

      {view === 'parking' && <Parking />}

      {view === 'cars' && (
        <ul>
          <Car brand="Toyota" status="parked" />
          <Car brand="Honda" status="in use" />
          <Car brand="Ford" status="parked" />
        </ul>
      )}
    </div>
  );
}

export default App;
