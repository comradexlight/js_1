const catalog = [
    {
        id: 0,
		name: "jersey",
		description: "our new jersey model",
		sizes: ["xs", "s", "m", "l", "xl", "xxl", ],
		price: 100,
		available: true,        
    },
	{
        id: 1,
		name: "cap",
		description: "our new cap model",
		sizes: ["s", "m", "l", ],
		price: 40,
		available: true,        
    },
	{
        id: 2,
		name: "gloves",
		description: "our standart gloves model",
		sizes: ["s", "m", "l" ],
		price: 70,
		available: true,        
    },
	{
        id: 3,
		name: "pants with straps",
		description: "our standart pants with straps model",
		sizes: ["xs", "s", "m", "l", "xl", "xxl", ],
		price: 115,
		available: true,        
    },
	{
        id: 4,
		name: "glasses",
		description: "a new model of glasses, still in development",
		sizes: ["m", ],
		price: 100,
		available: false,        
    },
];

const basket = [
	{
		good: catalog[0].id,
		amount: 1,
	},
	{
		good: catalog[2].id,
		amount: 2,
	},
];

function addToBasket(id, amount) {
	basket.push({good: id, amount: amount}, );
};

function deleteFromBasket(id) {
	for (let position in basket) {
		if (id == basket[position].good) {
			basket.splice(position, 1);
			break
		}
	}
}

function clearBasket() {
	basket.splice(0);
}

function totalInBasket() {
	let totalAmount = 0;
	let totalSumm = 0;
		
	for (const position in basket) {
		totalAmount += basket[position].amount;
		let sum = catalog[basket[position].good].price * basket[position].amount;
		totalSumm += sum;
	};
	let total = {totalAmount, totalSumm}; 	
	return total;
}

console.log(basket);
addToBasket(catalog[1].id, 3);
console.log(basket);
deleteFromBasket(catalog[0].id);
console.log(basket);
clearBasket();
console.log(basket);
addToBasket(catalog[1].id, 3);
addToBasket(catalog[0].id, 2);
addToBasket(catalog[3].id, 1);
console.log(basket);
console.log(totalInBasket());