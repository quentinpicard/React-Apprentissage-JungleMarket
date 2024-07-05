// Importation de la liste des plantes depuis un fichier local
import { plantList } from '../data/plantList';

// Importation du fichier CSS pour appliquer les styles
import '../style/ShoppingList.css';

// Définition du composant fonctionnel Categories
function Categories ({ Selectedcatego, setActiveCategory, categories }) {
    return (
        <div className='lmg-type-categories'>
            {/* Conteneur principal pour les catégories */}
            <div className='lmj-catego'>
                <div className='lmj-cat'>
                    {/* Étiquette pour le menu déroulant */}
                    <label htmlFor="fruits">Choisissez votre catégorie de plantes :</label>
                    <br />
                    {/* Menu déroulant pour sélectionner une catégorie */}
                    <select id='plantCategories'  value={Selectedcatego} onChange={(e) => setActiveCategory(e.target.value)}>
                        {/* Génération des options du menu déroulant à partir des catégories */}
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    {/* Bouton pour effacer le filtre de catégorie */}
                    <button onClick={() => setActiveCategory('')}>
                        Effacer le filtre
                    </button>
                </div>
            </div>
        </div>
    )
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Categories;
