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
        this.filter = /[a-zа-я_0-9]+(\s[a-zа-я_0-9]+)*/gi;
		this.sortPrice = sortPrice;
		this.sortDir = sortDir;

	};

	get list() {
        if (this.sortPrice) {
            if (this.sortDir) {
                return this.#goods.sort((good1, good2) => good1.price > good2.price ? 1: -1).filter((good) => good.available).filter((good) => this.filter.test(good.name));
            }
            else if (!this.sortDir) {
                return this.#goods.sort((good1, good2) => good1.price > good2.price ? -1: 1).filter((good) => good.available).filter((good) => this.filter.test(good.name));
            }
        }
        else if (!this.sortPrice) {
            return this.#goods.sort((good1, good2) => good1.id > good2.id ? 1: -1).filter((good) => good.available).filter((good) => this.filter.test(good.name));
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
		return this.goods.reduce(function(accumulator, good){return accumulator += good.amount * good.price;}, 0);
	};
	
	
	get totalSum() {
        return this.goods.reduce(function(accumulator, good){return accumulator += good.amount;}, 0);	
    };
	
	add(good, amount) {
        if (this.goods.find(oldGood => oldGood.id == good.id)) {
			this.goods.forEach((oldGood) => oldGood.id === good.id ? oldGood.amount += amount : oldGood.amount = oldGood.amount);
        }
		else {
			let newGood = new BasketGood(good, amount);
			this.goods.push(newGood);
		};
	};

	remove(good, amount) {
		if (this.goods.find(oldGood => oldGood.id == good.id)) {
			this.goods.forEach((oldGood) => oldGood.id === good.id ? oldGood.amount -= amount : oldGood.amount = oldGood.amount);
			this.goods = this.goods.filter(function(oldGood) {return oldGood.amount > 0});
		}
		else {
			console.log("Данного товара нет в корзине");
		};
	};

    clear() {
        this.goods.splice(0, this.goods.length);
    };

    removeUnavailable() {
        this.goods = this.goods.filter(function(good) {return good.available});
    };
};



let jersey = new Good(0, "jersey", "our new jersey model", "m", 100, true);
let cap = new Good(1, "cap", "our new cap model", "m", 40, true);
let gloves = new Good(2, "gloves", "our standart gloves model", "s", 70, true);
let pantsWithStraps = new Good(3, "pants with straps", "our standart pants with straps model", "m", 115, true);
let glasses = new Good(4, "glasses", "a new model of glasses, still in development", "m", 100, false);

let goodsList = [jersey, cap, gloves, pantsWithStraps, glasses, ];

let catalog = new GoodsList(goodsList, true, false);
let basket = new Basket([]);

basket.add(jersey, 1);
basket.add(cap, 2);
basket.add(gloves, 1);
basket.add(glasses, 3);
console.log(catalog.list);
catalog.sortDir = true;
console.log(catalog.list);
catalog.sortPrice = false;
console.log(catalog.list);
catalog.sortPrice = true;
console.log(catalog.list);
catalog.remove(0);
console.log(catalog.list);

console.log(basket);
console.log(basket.totalAmount);
console.log(basket.totalSum);

basket.remove(jersey, 1);
console.log(basket);
console.log(basket.totalAmount);
console.log(basket.totalSum);

basket.removeUnavailable();
console.log(basket);
console.log(basket.totalAmount);
console.log(basket.totalSum);

basket.clear();
console.log(basket);

console.log(catalog.filter.test(jersey.name));
console.log(catalog.filter.test(cap.name));
console.log(catalog.filter.test(gloves.name));
console.log(catalog.filter.test(pantsWithStraps.name));
console.log(catalog.filter.test(glasses.name));
console.log(catalog.filter.test("!"));

console.log(catalog.list);