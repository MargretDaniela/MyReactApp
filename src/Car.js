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