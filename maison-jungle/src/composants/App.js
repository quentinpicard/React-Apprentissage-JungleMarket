import logo from'../asset/logo.png';
import '../App.css';
import './Banner';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Footer from './Footer';
import { useState, useEffect } from 'react';


function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  const [Selectedcatego, setActiveCategory] = useState('');
  
  return (
      <div>
        <Banner>
          <img src={logo} alt='logo de la maison jgl' className='lmj-logo'></img>
          <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        <QuestionForm/>
        <div className='main-container'>
          
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} Selectedcatego={Selectedcatego} setActiveCategory={setActiveCategory} />
        </div>
        <Footer/>
      </div>
    
  
  );
}

export default App;
