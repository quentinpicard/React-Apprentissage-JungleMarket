import { useState } from 'react';
import '../style/Cart.css';

function QuestionForm() {
    // Initialisation de l'état avec une valeur par défaut
    const [inputValue, setInputValue] = useState('Posez votre question ici');

    // Vérifie si la valeur contient la lettre 'f'
    const isInputError = inputValue.includes('f');

    // Fonction de validation de la valeur
    function checkValue(value) {
        // Si la valeur ne contient pas 'f', elle est acceptée et l'état est mis à jour
        if (!value.includes('f')) {
            setInputValue(value);
        }
    }

    return (
        <div className='hidden'>
            <textarea
                value={inputValue} // Liaison de l'état à la valeur du textarea
                onChange={(e) => checkValue(e.target.value)} // Mise à jour de l'état avec la nouvelle valeur
            />
            {isInputError && ( 
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div> 
            )}
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button> {/* Affichage d'une alerte avec la valeur actuelle */}
        </div>
    );
}

export default QuestionForm;
