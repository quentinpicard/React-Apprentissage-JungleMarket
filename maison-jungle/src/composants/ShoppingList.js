import { plantList } from '../data/plantList';
import '../style/ShoppingList.css'
import CareScale from './CareScale';
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
            <div className='lmj-all-plant'>
                <div className='lmj-scroll-plant'>
                    {plantList.map((plant) =>(
                        <div key={plant.id} className='lmj-plant'>
                            {/* <div>{plant.name}</div> */}
                            <PlantItem namePlant={plant.name} />
                            <div>{plant.category}</div>
                            <div>{plant.isBestSale? <p>🔥</p> : null} </div>
                            <div>{plant.isSpecialOffer? <p>-20%</p> : null}</div>
                            <CareScale careType='water' scaleValue={plant.water} />
                            <CareScale careType='light' scaleValue={plant.light} />

                        
                        </div>
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