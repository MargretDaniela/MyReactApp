import { useState } from 'react';

function Parking() {
  const [occupiedSpots, setOccupiedSpots] = useState(5);
  const totalSpots = 10;
  const availableSpots = totalSpots - occupiedSpots;

  const parkCar = () => {
    if (occupiedSpots < totalSpots) {
      setOccupiedSpots(occupiedSpots + 1);
    }
  };

  const unparkCar = () => {
    if (occupiedSpots > 0) {
      setOccupiedSpots(occupiedSpots - 1);
    }
  };

  return (
    <div>
      <h1>Parking Lot Status</h1>
      <p>Total Spots: {totalSpots}</p>
      <p>Occupied Spots: {occupiedSpots}</p>
      <p>Available Spots: {availableSpots}</p>
      {availableSpots > 0 ? (
        <button onClick={parkCar}>Park Car</button>
      ) : (
        <h2>Parking Lot is Full!</h2>
      )}
      {occupiedSpots > 0 && <button onClick={unparkCar}>Unpark Car</button>}
    </div>
  );
}

export default Parking;
