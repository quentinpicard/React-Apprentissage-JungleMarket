// Importation du composant CareScale et du fichier CSS
import CareScale from './CareScale';
import '../style/PlantItem.css';

// Fonction pour gérer les clics sur un élément de plante
function handleClick(plantName) {
    // Affiche une alerte lorsque l'utilisateur clique sur un élément de plante
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix :)`);
}

// Définition du composant fonctionnel PlantItem
function PlantItem({ name, cover, id, light, water, price }) {
    return (
        // Conteneur principal de l'élément plante avec un gestionnaire de clic
        <div className="lmj-plant-item" onClick={() => handleClick(name)}>
            {/* Affichage du prix de la plante */}
            <span className='lmj-plant-item-price'>{price}€</span>
            {/* Affichage de l'image de la plante */}
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
            {/* Affichage du nom de la plante */}
            {name}
            <div>
                {/* Composants CareScale pour afficher les niveaux d'eau et de lumière nécessaires */}
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </div>
    );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default PlantItem;
