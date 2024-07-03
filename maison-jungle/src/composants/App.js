import logo from'../asset/logo.png';
import '../App.css';
import './Banner';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Footer from './Footer';

function App() {
  return (
      <div>
        <Banner>
          <img src={logo} alt='logo de la maison jgl' className='lmj-logo'></img>
          <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        <QuestionForm/>
        <div className='main-container'>
          <Cart />
          <ShoppingList />
        </div>
        <Footer/>
      </div>
    
  
  );
}

export default App;
