function Person (id, fn, ln) {
    this.id = id
    this.firstname = fn
    this.lastname = ln
}

//2. create object by using constructor function
const p1 = new Person(1001, 'Adam', 'Jo')
const p2 = new Person(1002, 'Henry', 'Moore')
const p3 = new Person(1003, 'Mia', 'Anderson')

console.log(p1)
console.log(p2)
console.log(p3)

p1.email = 'adam@gmail.com'
// object prototype <-- person prototype <-- p1
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Person.prototype.isPrototypeOf(p1))




//4. create object with Object.create() function
// const p1 = new Person(1001, 'Adam', 'Jo')
const pp1 = Object.create(p1)
console.log(pp1)
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)
console.log(Object.prototype.isPrototypeOf(pp1)) //true
console.log(Person.prototype.isPrototypeOf(pp1)) //true
pp1.hobbies = ['reading', 'shopping']
console.log(Object.keys(pp1))
console.log(Object.values(pp1))
console.log(Object.entries(pp1))
 