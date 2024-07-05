import monstera from '../asset/monstera.jpg';
import basil from '../asset/basil.jpg';
import lyrata from '../asset/lyrata.jpg';
import olivier from '../asset/olivier.jpg';
import pothos from '../asset/pothos.jpg';
import succulente from '../asset/succulent.jpg';
import cactus from '../asset/cactus.jpg';
import calathea from '../asset/calathea.jpg';
import mint from '../asset/mint.jpg';

export const plantList = [
	{
		name: 'monstera',
		cover: monstera,
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		isSpecialOffer : true,
		water : 2, 
		light : 1, 
		price : 8
	},
	{
		name: 'ficus lyrata',
		cover: lyrata,
		category: 'classique',
		id: '2ab',
		isBestSale: false,
		isSpecialOffer : true,
		water : 2, 
		light : 3,
		price : 15
	},
	{
		name: 'pothos argenté',
		cover: pothos,
		category: 'classique',
		id: '3sd',
		isBestSale: false,
		isSpecialOffer : false,
		water : 3, 
		light : 1,
		price : 13
	},
	{
		name: 'Calathea',
		cover: calathea,
		category: 'classique',
		id: '4kk',
		isBestSale: false,
		isSpecialOffer : false,
		water : 1, 
		light : 3,
		price : 4
	},
	{
		name: 'olivier',
		cover: olivier,
		category: 'extérieur',
		id: '5pl',
		isBestSale: false,
		isSpecialOffer : true,
		water : 2, 
		light : 2,
		price : 7
	},
	{
		name: 'Menthe',
		cover: mint,
		category: 'extérieur',
		id: '6uo',
		isBestSale: false,
		isSpecialOffer : false,
		water : 2, 
		light : 2,
		price : 25
	},
	{
		name: 'basilique',
		cover: basil,
		category: 'extérieur',
		id: '7ie',
		isBestSale: false,
		isSpecialOffer : false,
		water : 1, 
		light : 2,
		price : 16
	},
	{
		name: 'Cactus',
		cover: cactus,
		category: 'plante grasse',
		id: '8fp',
		isBestSale: false,
		isSpecialOffer : false,
		water : 2, 
		light : 3,
		price : 5
	},
	{
		name: 'succulente',
		cover: succulente,
		category: 'plante grasse',
		id: '9vn',
		isBestSale: false,
		isSpecialOffer : false,
		water : 2,
		light : 1,
		price : 12
	}
]