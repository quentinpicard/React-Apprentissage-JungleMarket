
function CareScale ({scaleValue, careType}) {
    const rang = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️': '💧';

    return  (
        <div>
            {rang.map((rangElem) => 
            scaleValue >= rangElem ? <span key={rangElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    ) 
}


export default CareScale; 