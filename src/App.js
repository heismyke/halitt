import logo from './logo.svg';
import './App.css';
import './assets/css/style.css'
import Navigation from '././Components/NavigationBar/Nav'
import Herosection from '././Components/HeroSection/Hero.jsx'
import Subheader from '././Components/Subhead/Subheading'
import SubheadTwo from '././Components/SubheadTwo/SubheadingTwo'

function App() {
  return (
    <div>
       <Navigation />
       <Herosection />
       <Subheader />
       <SubheadTwo />
    </div>
  );
}

export default App;
