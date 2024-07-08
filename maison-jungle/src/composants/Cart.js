// Importation des hooks useState et useEffect de React et du fichier CSS pour le style
import { useState, useEffect } from 'react';
import '../style/Cart.css';

// Définition du composant fonctionnel Cart
function Cart({ cart, updateCart, Selectedcatego }) {
    // Déclaration de l'état local pour gérer l'ouverture/fermeture du panier
    const [isOpen, setIsOpen] = useState(true);

    // Calcul du total du panier en utilisant reduce pour accumuler le montant total
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    // useEffect pour mettre à jour le titre du document avec le montant total des achats
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`;
    }, [total]); // Déclenché à chaque changement de la valeur de total

    // Rendu conditionnel basé sur l'état isOpen
    return isOpen ? (
        <div className='lmj-cart'>
            {/* Bouton pour fermer le panier */}
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            {/* Affichage des articles du panier ou d'un message indiquant que le panier est vide */}
            {cart.length > 0 ? (
                <div>
                    <div>
                        {/* Affichage des détails de chaque article dans le panier */}
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </div>
                    <h3>Total : {total}€</h3>
                    {/* Bouton pour vider le panier */}
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            {/* Bouton pour ouvrir le panier */}
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Cart;
