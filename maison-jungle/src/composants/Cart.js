import '../style/Cart.css';
import { useState } from 'react';

function Cart () {
    const monstera = 8;

    const [cart, updateCart] = useState(0);

    return (
        <div className="lmj-panier">
            <div className="lmj-panier-title">
                <h2>Panier</h2>
            </div>
            <ul className="lmj-panier-liste">
                <li>Monstera : {monstera} €</li>
                <button onClick={()=> updateCart(cart + 1)}>
                    Ajouter
                </button>
            </ul>
            <div className="lmj-panier-total">
                <p>Total</p>
                <p>{monstera * cart} €</p>
            </div>
        </div>
    );
}

export default Cart;