// public, private, and protected access modifiers
// public: accessible from anywhere. It's the default access modifier. You don't need to specify it.
// private: accessible only within the class
// protected: accessible within the class and its subclasses. Acutally, you can access protected properties from outside the class in JS, but it's not recommended.
class CoffeeMachine {
    #waterLimit: number = 200; // private property
    #power: number;            // private property
    _waterAmount: number = 0;  // protected property

    constructor(power: number) {
        this.#power = power; // you can set the value of power only when creating an instance of the class.
    }
    
    getWaterLimit() {
        return this.#waterLimit;
    }
        
    getPower() {
        return this.#power;
    }
    
    setWaterAmount(value: number) {
        if (value < 0) {
            this._waterAmount = 0;
            return console.log('Water amount must be positive.');
        } else if (value > this.#waterLimit) {
            this._waterAmount = this.#waterLimit;
            return console.log(`Water amount can't be more than ${this.#waterLimit}.`);
        } else {
            this._waterAmount = value;
        }
    }
    getWaterAmount() {
        return this._waterAmount;
    }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// console.log(`Water limit: ${coffeeMachine.#waterLimit} ml`); // error because #waterLimit is private
console.log(`Water limit: ${coffeeMachine.getWaterLimit()} ml`); // 200 
console.log(`Power: ${coffeeMachine.getPower()}`); // 100

console.log(`--------------------------------------------`);
// add water
coffeeMachine.setWaterAmount(-10); // Water amount must be positive.
console.log(`Water: ${coffeeMachine.getWaterAmount()} ml`); // 0
coffeeMachine.setWaterAmount(300); // _waterAmount is 200
console.log(`Water: ${coffeeMachine.getWaterAmount()} ml`); // 200
coffeeMachine.setWaterAmount(150); // _waterAmount is 150
console.log(`Water: ${coffeeMachine.getWaterAmount()} ml`); // 150

console.log(`--------------------------------------------`);
// Actually, you can access _waterAmount directly, but it's not recommended.
coffeeMachine._waterAmount = 300;
console.log(`Water: ${coffeeMachine._waterAmount} ml`);
