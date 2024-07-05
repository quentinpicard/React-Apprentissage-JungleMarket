import { plantList } from '../data/plantList';
import '../style/ShoppingList.css'


function Categories ({Selectedcatego, setActiveCategory, categories}) {

    return (
        <div className='lmg-type-categories'>
                <div className='lmj-catego'>
                    <div className='lmj-cat'>
                        <label for="fruits">Choisissez votre catégories de plantes :</label>
                        <br />
                        <select id='plantCategories' value={Selectedcatego} onChange={(e) => setActiveCategory(e.target.value)}>
                            {categories.map((cat) => (
                                <option key='cat' value={cat}>
                                        {cat}

                                </option>
                            ))}
                        </select>
                        <button onClick={()=> setActiveCategory('')} > Effacer le filtre</button>
                    </div>
                </div>
            </div>
    )
}
export default Categories;