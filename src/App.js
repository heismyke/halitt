import logo from './logo.svg';
import './App.css';
import './assets/css/style.css'
import Navigation from '././Components/NavigationBar/Nav';
import LandingPage from './Components/LandingPage';
import MoreInfo from './Components/RecentApartments/MoreInfo';
import MoreInfo2 from './Components/RecentApartments/MoreinfoTwo';
import {
  BrowserRouter as Router, Routes, Route

}from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navigation />
      <Routes>
          <Route path = '/' element = {<LandingPage />}/>
          <Route path = '/more' element = {<MoreInfo />}/>
          <Route path = '/more2' element = {<MoreInfo2 />}/>
          
      </Routes>
      </Router>
       
        

    </div>

  );
}

export default App;
