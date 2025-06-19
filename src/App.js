// import logo from './logo.svg';

import './App.css';
import Greet from './Greet';

function App() {
  return (
    <div className="App"> 
      <Greet name="Daniela" age="24" address = " Wakiso" />
      <Greet name="Margret"  age = "20" address =" Mbarara"/>
      <Greet name="Lidia"  age = "25" address =" Kabale"/>
      <Greet name="Margie"  age = "26" address =" Jinja"/>
    </div>
  );
}

export default App;
