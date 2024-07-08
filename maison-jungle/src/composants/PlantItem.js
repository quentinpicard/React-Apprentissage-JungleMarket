import CareScale from './CareScale';
import '../style/PlantItem.css'

function handleClick (plantName){ //permet de gérer les événement sur react
    // console.log("hello world");
    alert (`Vous voulez acheter 1 ${plantName} ? Très bon choix :) `);

}


function PlantItem ({name, cover, id, light, water, price}){
    

    return (
        <div className="lmj-plant-item" onClick={() => handleClick(name)} > 
            <span className='lmj-plant-item-price'>{price}€</span>
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover'></img>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </div>
    )
}



export default PlantItem; 