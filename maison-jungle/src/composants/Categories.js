import { plantList } from '../data/plantList';
import '../style/ShoppingList.css'


function Categories ({catego, updateCategos}) {
    const categories = plantList.reduce( // récupère les valeurs de catégories dans le tableau plantList et on le met dans une boucle reduce()
        (acc, plant) =>
            acc.includes(plant.category)? acc:acc.concat(plant.category), [] // on regarde la valeur de category et on le concat dans un tableau vide []
    )



    return (
        <div className='lmg-type-categories'>
                <div className='lmj-catego'>
                    <div className='lmj-cat'>
                        <label for="fruits">Choisissez votre catégories de plantes :</label>
                        <br />
                        <select>
                            {categories.map((cat) => (
                                <option key='cat' >
                                        {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
    )
}
export default Categories;