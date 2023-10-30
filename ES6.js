//3. create object by using class
// javascript is a prototype based, not class based
// Syntactic sugar
class Circle {
    constructor(r) {
        this.radius = r
    }
    area(){
       return Math.PI * Math.pow(this.radius, 2)
    }
    getRadius(){
        return this.radius
    }
}

const c1 = new Circle(2)
const c2 = new Circle(3)
const c3 = new Circle(4)

console.log(c1.area())
console.log(c2.area())
console.log(c3.area())
console.log(c1.getRadius())
console.log(c2.getRadius())
console.log(c3.getRadius())
// object prototype <- circle prototype <- c1
console.log(Object.prototype.isPrototypeOf(c1))
console.log(Circle.prototype.isPrototypeOf(c1))

// const p1 = new Person(1001, 'Adam', 'Jo')
const pp1 = Object.create(p1)
console.log(pp1)
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)
console.log(Object.prototype.isPrototypeOf(pp1))
console.log(Person.prototype.isPrototypeOf(pp1))