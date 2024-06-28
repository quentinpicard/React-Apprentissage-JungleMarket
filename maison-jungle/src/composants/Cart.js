import '../style/Cart.css';

function Cart () {
    const monstera = 8;
    const lierre = 10;
    const bouquetDeFleurs = 15;
    return (
        <div className="lmj-panier">
            <div className="lmj-panier-title">
                <h2>Panier</h2>
            </div>
            <ul className="lmj-panier-liste">
                <li>Monstera : {monstera} €</li>
                <li>Lierre : {lierre} €</li>
                <li>Bouquet de Fleur : {bouquetDeFleurs} €</li>
            </ul>
            <div className="lmj-panier-total">
                <p>Total</p>
                <p>{monstera + lierre + bouquetDeFleurs} €</p>
            </div>
        </div>
    );
}

export default Cart;