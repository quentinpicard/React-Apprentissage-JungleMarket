// Importation des ressources et des composants nécessaires
import logo from '../asset/logo.png';  // Importation du logo
import '../App.css';  // Importation du fichier CSS principal
import './Banner';  // Importation du fichier du composant Banner (potentiellement redondant ici)
import Banner from './Banner';  // Importation du composant Banner
import Cart from './Cart';  // Importation du composant Cart
import ShoppingList from './ShoppingList';  // Importation du composant ShoppingList
import QuestionForm from './QuestionForm';  // Importation du composant QuestionForm
import Footer from './Footer';  // Importation du composant Footer
import { useState, useEffect } from 'react';  // Importation des hooks useState et useEffect de React

// Définition du composant fonctionnel App
function App() {
  // Récupération du panier sauvegardé dans localStorage
  const savedCart = localStorage.getItem('cart');
  // Initialisation de l'état du panier avec les données sauvegardées ou un tableau vide
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  // useEffect pour sauvegarder le panier dans localStorage chaque fois qu'il change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);  // Déclenché à chaque changement de la valeur de cart

  // Initialisation de l'état pour la catégorie sélectionnée
  const [Selectedcatego, setActiveCategory] = useState('');

  // Rendu du composant
  return (
    <div>
      {/* Affichage du composant Banner avec une image et un titre */}
      <Banner>
        <img src={logo} alt='logo de la maison jgl' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      {/* Affichage du formulaire de questions */}
      <QuestionForm />
      <div className='main-container'>
        {/* Affichage du panier */}
        <Cart cart={cart} updateCart={updateCart} />
        {/* Affichage de la liste des plantes avec les fonctionnalités de panier et de sélection de catégorie */}
        <ShoppingList 
          cart={cart} 
          updateCart={updateCart} 
          Selectedcatego={Selectedcatego} 
          setActiveCategory={setActiveCategory} 
        />
      </div>
      {/* Affichage du pied de page */}
      <Footer />
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default App;
