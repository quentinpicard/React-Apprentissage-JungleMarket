import logo from'../asset/logo.png';
import '../App.css';
import './Banner';
import Banner from './Banner';

function App() {
  return (
    <Banner>
      <img src={logo} alt='logo de la maison jgl' className='lmj-logo'></img>
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
  
  );
}

export default App;
