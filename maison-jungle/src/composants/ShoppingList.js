const plantlist = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
];

function ShoppingList () {
    return (
        <ul>
            {plantlist.map((plant, index) =>  ( 
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>
    )
};

export default ShoppingList;