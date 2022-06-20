'use strict';

class Good {
	constructor (id, name, description, sizes, price, available) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.sizes = sizes;
		this.price = price;
		this.available = available;
	};
	
	setAvailable(value) {
		if (typeof value == "boolean") {
			this.available = value;
            return this;
		} else {
			console.log("Вы ввели неверное значение"); 
		}
	};
};

class GoodsList{
    #goods;
	constructor (goods, sortPrice, sortDir) {
		this.#goods = goods;
        //this.filter =  
		this.sortPrice = sortPrice;
		this.sortDir = sortDir;

	};

	get list() {
        if (this.sortPrice === true) {
            if (this.sortDir === true) {
                return this.#goods.sort((good1, good2) => good1.price>good2.price ? 1: -1).filter((good) => good.available === true);
            }
            else if (this.sortDir === false) {
                return this.#goods.sort((good1, good2) => good1.price>good2.price ? -1: 1).filter((good) => good.available === true);
            };
        };
	};
	
	add(good) {
		this.#goods.push(good);
		return;
	};
	
	remove(id) {
        this.#goods = this.#goods.filter((good) => good.id !== id);
		return;
	};
}

class BasketGood extends Good {
	constructor(good, amount){
        super(good.id, good.name, good.description, good.sizes, good.price, good.available);
        this.amount = amount;
	};
};

class Basket {
	constructor(goods) {
		this.goods = goods;
	};
	
	get totalAmount() {
		return this.goods.reduce(function(accumulator, good){return accumulator += good.amount;}, 0);
	}; 
	
	get totalSum() {
		let sum = 0;
		this.goods.forEach((good) => sum += (good.amount * good.price));
		return sum;
	};
	
	add(good, amount) {
		if (!this.goods.includes(good)) {
			let newGood = new BasketGood(good, amount);
			this.goods.push(newGood);
		}
		else {
			this.goods.filter(goodOld => goodOld.id === good.id)
		}
	}; 
};



let jersey = new Good(0, "jersey", "our new jersey model", "m", 100, true);
let cap = new Good(1, "cap", "our new cap model", "m", 40, true);
let gloves = new Good(2, "gloves", "our standart gloves model", "s", 70, true);
let pantsWithStraps = new Good(3, "pants with straps", "our standart pants with straps model", "m", 115, true);
let glasses = new Good(4, "glasses", "a new model of glasses, still in development", "m", 100, false);
let goodsList = [jersey, cap, gloves, pantsWithStraps, glasses, ];
//console.log(jersey);
//jersey.setAvailable(false);
//console.log(jersey);
//jersey.setAvailable(123);
//console.log(jersey);
//console.log(cap);
let catalog = new GoodsList(goodsList, true, false);
//console.log(catalog);
//console.log(catalog);
//console.log(catalog.list);
//catalog.remove(jersey.id);
//catalog.remove(cap.id);
//console.log(catalog.list);
//catalog.add(jersey);
//catalog.add(cap);
//console.log(catalog.list);
let jerseyInBasket = new BasketGood(jersey, 2);
let capInBasket = new BasketGood(cap, 3);
//let glovesInBasket = new BasketGood(gloves, 1);
//console.log(jerseyInBasket);
let basket = new Basket([jerseyInBasket, capInBasket]);
console.log(basket);
console.log(basket.totalAmount);
console.log(basket.totalSum);
basket.add(gloves, 1);
console.log(basket);
console.log(basket.totalAmount);
console.log(basket.totalSum);