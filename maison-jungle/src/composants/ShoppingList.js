import { plantList } from '../data/plantList';
import '../style/ShoppingList.css'
import PlantItem from './PlantItem';
import Categories from './Categories';



function ShoppingList ({cart, updateCart, Selectedcatego, setActiveCategory}) {
    
    const categories = plantList.reduce( // récupère les valeurs de catégories dans le tableau plantList et on le met dans une boucle reduce()
        (acc, plant) =>
            acc.includes(plant.category)? acc:acc.concat(plant.category), [] // on regarde la valeur de category et on le concat dans un tableau vide []
    )

    
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
            
            <Categories Selectedcatego={Selectedcatego} setActiveCategory={setActiveCategory} categories={categories}/>
            <div className='lmj-main-plant'>
                <div className='lmj-plant-list'>
                    {plantList.map(({name, cover, id, water, light, price, category}) => !Selectedcatego || Selectedcatego === category ?(
                        <div key={id} className='lmj-cart-plant'>
                            <PlantItem id={id} cover={cover} name={name} water={water} light={light} price={price}/>
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                        
                        
                    ) : null)}
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