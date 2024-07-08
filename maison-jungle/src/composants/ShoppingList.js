// Importation de la liste des plantes depuis un fichier de données
import { plantList } from '../data/plantList';

// Importation du fichier CSS pour styliser le composant
import '../style/ShoppingList.css';

// Importation des composants PlantItem et Categories
import PlantItem from './PlantItem';
import Categories from './Categories';

// Définition de la fonction ShoppingList, un composant React prenant plusieurs props en entrée
function ShoppingList ({ cart, updateCart, Selectedcatego, setActiveCategory }) {

    // Extraction des catégories uniques des plantes dans plantList
    const categories = plantList.reduce( 
        (acc, plant) =>
            // Si la catégorie de la plante n'est pas déjà dans l'accumulateur, on l'ajoute
            acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    );

    // Fonction pour ajouter une plante au panier
    function addToCart(name, price) {
        // Vérifie si la plante est déjà dans le panier
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if (currentPlantSaved) {
            // Si elle est déjà dans le panier, on la retire temporairement du panier
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            );
            // On met à jour le panier avec la plante ayant une quantité augmentée
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ]);
        } else {
            // Si elle n'est pas encore dans le panier, on l'ajoute avec une quantité de 1
            updateCart([...cart, { name, price, amount: 1 }]);
        }
    }

    // Rendu du composant ShoppingList
    return (
        <div className='lmj-main-plant'>
            {/* Affichage des catégories */}
            <Categories 
                Selectedcatego={Selectedcatego} 
                setActiveCategory={setActiveCategory} 
                categories={categories} 
            />
            <div className='lmj-main-plant'>
                <div className='lmj-plant-list'>
                    {/* Affichage de la liste des plantes filtrée par catégorie */}
                    {plantList.map(({ name, cover, id, water, light, price, category }) => 
                        !Selectedcatego || Selectedcatego === category ? (
                        <div key={id} className='lmj-cart-plant'>
                            {/* Affichage des détails de la plante */}
                            <PlantItem 
                                id={id} 
                                cover={cover} 
                                name={name} 
                                water={water} 
                                light={light} 
                                price={price} 
                            />
                            {/* Bouton pour ajouter la plante au panier */}
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ) : null)}
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;
