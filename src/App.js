
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './Weather';
import "./App.css"
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>
        <p className="aboutDeveloper">This project was coded by <a href='https://github.com/OleksandrOrz?tab=repositories'>Svitlana Orzul</a> and is <a href='https://github.com/OleksandrOrz/react-weather-app'>open-sourcedon GitHub</a></p>
      </div>
      
    </div> 
  );
}

export default App;
