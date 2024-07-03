import { plantList } from '../data/plantList';
import '../style/ShoppingList.css'
import PlantItem from './PlantItem';



function ShoppingList () {
    const categories = plantList.reduce( // récupère les valeurs de catégories dans le tableau plantList et on le met dans une boucle reduce()
        (acc, plant) =>
            acc.includes(plant.category)? acc:acc.concat(plant.category), [] // on regarde la valeur de category et on le concat dans un tableau vide []
    )
    return (
        <div className='lmj-main-plant'>
            
            <div className='lmg-type-categories'>
                <p>Nos catégories de plante : </p>
                <div className='lmj-catego'>
                    {categories.map((cat) => (
                        <div key='cat' >
                                {cat}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='lmj-main-plant'>
                <div className='lmj-plant-list'>
                    {plantList.map(({name, cover, id, water, light}) =>(
                        <PlantItem
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                    ))}
                </div>
            </div>
        


            {/* <div>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat}>{cat}</li>
                    ))}
                </ul>
                <ul>
                    {plantList.map((plant) =>  ( 
                        <li key={plant.id}> { plant.name } { plant.isBestSale? <span>🔥</span> : null} { plant.isSpecialOffer? <span> -20%</span> : null}</li>
                    ))}
                </ul>
                <ul>
                    {plantList.map((plant) =>  ( 
                        <li key={plant.id}>{ plant.name }</li>
                    ))}
                </ul>
            </div> */}
            
        </div>
    )
};

export default ShoppingList;