import { plantList } from '../data/plantList';
import '../style/ShoppingList.css'
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react';


function ShoppingList ({cart, updateCart}) {
    const [catego, updateCategos] = useState(0);

    
    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
        <div className='lmj-main-plant'>
            
            <Categories catego={catego} updateCategos={updateCategos} />
            <div className='lmj-main-plant'>
                <div className='lmj-plant-list'>
                    {plantList.map(({name, cover, id, water, light, price}) =>(
                        <div key={id}>
                            <PlantItem id={id} cover={cover} name={name} water={water} light={light} />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
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