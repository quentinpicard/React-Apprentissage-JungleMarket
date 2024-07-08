// Définition du composant fonctionnel CareScale
function CareScale({ scaleValue, careType }) {
    // Tableau des niveaux de soin
    const rang = [1, 2, 3];
    // Définition du type de soin (☀️ pour lumière, 💧 pour eau)
    const scaleType = careType === 'light' ? '☀️' : '💧';

    // Fonction pour gérer les clics sur un élément de soin
    function handleClick(scaleValue) {
        // Messages correspondant aux niveaux de soin
        const messages = {
            1: "peu",
            2: "modérement",
            3: "beaucoup"
        };

        // Affichage d'une alerte en fonction du type de soin et de la valeur du niveau
        if (careType === 'light') {
            alert(`Cette plante requiert ${rang.map((element) => 
                scaleValue === element ? messages[element] : ''
            ).filter(message => message !== '').join('')} de soleil.`);
        } else {
            alert(`Cette plante requiert ${rang.map((element) => 
                scaleValue === element ? messages[element] : ''
            ).filter(message => message !== '').join('')} d'eau.`);
        }
    }

    // Rendu du composant
    return (
        // Conteneur principal avec un gestionnaire de clic
        <div onClick={() => handleClick(scaleValue)}>
            {/* Affichage des icônes de soin en fonction du niveau */}
            {rang.map((rangElem) => 
                scaleValue >= rangElem ? <span key={rangElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default CareScale;
