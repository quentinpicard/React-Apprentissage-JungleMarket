function Cart () {
    const monstera = 8;
    const lierre = 10;
    const bouquetDeFleurs = 15;
    return (
        <div>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monstera} €</li>
                <li>Lierre : {lierre} €</li>
                <li>Bouquet de Fleur : {bouquetDeFleurs} €</li>
            </ul>
            <p>Total : {monstera + lierre + bouquetDeFleurs} €</p>
        </div>
    );
}

export default Cart;