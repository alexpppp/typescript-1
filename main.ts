export {}

let message = 'Welcome Back'
console.log(message)

let x = 10
const y = 20

let sum
const title = 'Codevolution'

// Types

let isBeginner: boolean = true
let total: number = 0
let name: string = 'Vishwas'

// Template strings
let sentence: string = `My name is ${name}
I am a beginner in Typescript`

//console.log(sentence)

// Variable Types
let n: null = null
let u: undefined = undefined

let isNew: boolean = null
let myName: string = undefined

let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

let person1: [string, number] = ['Chris', 22]

enum Color {Red = 5, Green, Blue}

let c: Color = Color.Green
//console.log(c)

// 'any' type
let randomValue: any = 10
randomValue = true
randomValue = 'Vishwas'

let myVariable: unknown = 10

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}
if (hasName(myVariable)) {
    console.log(myVariable.name)
}
// (myVariable as string).toUpperCase()

// TYPE INFERENCE

let a
a = 10
a = true

let b = 20

let multiType: number | boolean
multiType = 20
multiType = true

let anyType: any
anyType = 20
anyType = true

function add(num1: number, num2: number = 10):number {
    if (num2) 
        return num1 + num2
    else    
        return num1
}

add(5,10)

// OPTIONAL/DEFAULT PARAMETERS

//add '?' to end of a parameter in function, then that parameter is optional
// can now call add with one input
add(5)

// optional parameters must always be after the required parameters

// Default parameters are when you assign a value to it, like the second param below
// function add(num1: number, num2: number = 10)


// OBJECTS

interface Person {
    firstName: string
    lastName?: string
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p)

// Note that a field can be made optional with question mark
// Use case would be in forms where not all fields are mandatory


// CLASSES 

class Employee {
    employeeName: string

    constructor(name: string) {
        this.employeeName = name
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('Alex')
console.log(emp1.employeeName)
emp1.greet()

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName)
    }
    delegateWork() {
        console.log(`Manager delegating tasks`)
    }
}

let m1 = new Manager('Bruce')
m1.delegateWork()
m1.greet()
console.log(m1.employeeName)

// CLASS ACCESS MODIFIERS
// To restrict access, add 'public' (free accessibility) or 'private' (access only within class)
// e.g. 
// class Employee {
//      private employeeName: string

// also 'protected' (for access within a class and the classes derived from it)
