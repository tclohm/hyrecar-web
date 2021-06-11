export const types = [
	'ALL',
	'SUV',
	'TRUCH',
	'SEDAN',
	'VAN',
	'COUPE',
	'WAGON',
	'CONVERTIBLE',
	'SPORTS_CAR',
	'DIESEL',
	'CROSSOVER',
	'LUXURY_CAR',
	'HYBRID_ELECTRIC',
	]

export const transform = (type) => {
	switch(type) {
		case 'SUV':
			return 'SUV'
		case 'TRUCH':
			return 'Truch'
		case'SEDAN':
			return 'Sedan'
		case 'VAN':
			return 'Van'
		case 'COUPE':
			return 'Coupe'
		case 'WAGON':
			return 'Wagon'
		case 'CONVERTIBLE':
			return 'Convertible'
		case 'SPORTS_CAR':
			return 'Sports Car'
		case 'DIESEL':
			return 'Diesel'
		case 'CROSSOVER':
			return 'Crossover'
		case 'LUXURY_CAR':
			return 'Luxury Car'
		case 'HYBRID_ELECTRIC':
			return 'Hybrid/Electric' 
		default:
			return 'All'
	}
}