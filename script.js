// constructor function
const Counter = function (name) { 
    // this points at newly created  empty object
    // when is used with new keyword
    this.name = name
    this.number = 0 
}

Counter.prototype.inc = function () {
    this.number = this.number + 1
}

Counter.prototype.status = function () {
    console.log('Current number is: ' + this.number)
    return this.number
}

const counter1 = new Counter('counter1')
const counter2 = new Counter('counter2')
const counter3 = new Counter('counter3')
const counter4 = new Counter('counter4')

counter1.inc()
counter2.inc()
counter2.inc()
if (counter1.status() !== 1) throw new Error('Counter 1 do not work')
if (counter2.status() !== 2) throw new Error('Counter 2 do not work')