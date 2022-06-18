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
		} else {
			console.log("Вы ввели неверное значение"); 
		}
	};
};

class GoodsList {
	constructor (goods, filter, sortPrice, sortDir) {
		this.#goods = goods;
		this.filter = filter;
		this.sortPrice = sortPrice;
		this.sortDir = sortDir;
	};
	
	get list() {
		return
	};
	
	add(id) {
		this.goods.push(id);
		return;
	};
	
	remove(id) {
		this.goods.splice(id, 1);
		return;
	};
}

class BasketGood extends Good {
	constructor(id, amount) {
		super.amount = amount;
	};
};

class Basket {
	constructor(goods) {
		this.goods = goods;
	};
	
	
};

let jersey = new Good(0, "jersey", "our new jersey model", "m", 100, true);
console.log(jersey);
jersey.setAvailable(false);
console.log(jersey);
jersey.setAvailable(123);
console.log(jersey);