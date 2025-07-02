import { useState } from 'react';

function Goal({ onAddGoal }) {
  const [goalName, setGoalName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onAddGoal(goalName);
    setGoalName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the new goal:
        <input
          type="text"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />
      </label>
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default Goal;
