import CareScale from './CareScale';
import '../style/PlantItem.css'

function PlantItem ({name, cover, id, light, water}){
    

    return (
        <div className="lmj-plant-item">
            <img src={cover} alt={`${name} cover`} className='lmj-logo'></img>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </div>
    )
}

export default PlantItem; 