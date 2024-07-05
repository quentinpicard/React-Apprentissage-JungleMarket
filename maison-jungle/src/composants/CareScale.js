// import { plantList } from '../data/plantList';



function CareScale ({scaleValue, careType}) {
    const rang = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️': '💧';
    

    function handleClick (scaleValue){ //permet de gérer les événement sur react
        const messages = {
            1: "peu",
            2: "modérement",
            3: "beaucoup"
        };
        
        if (careType === 'light') {
            alert (`Cette plante requiert ${rang.map((element) => scaleValue === element ? messages[element] : '' )
                .filter(message => message !== '').filter(message => message !== '')
                .join('')} de soleil. `
            );
        }
        else {
            alert (`Cette plante requiert ${rang.map((element) => 
                scaleValue === element ? messages[element] : '' )
                .filter(message => message !== '').filter(message => message !== '')
                .join('')} d'eau. `
            );
        }
        
    }

    return  (
        <div onClick={() => handleClick(scaleValue) }>
            {rang.map((rangElem) => 
            scaleValue >= rangElem ? <span key={rangElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    ) 
}


export default CareScale; 