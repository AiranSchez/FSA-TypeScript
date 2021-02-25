// 1-2-3-4
const firstName: string = "Airan"
const surname: string = "Sánchez"
const age: number = 24

interface PersonalData {
    firstName: string,
    surname: string,
    age: number,
    isTeacher: boolean,
}

const myData: PersonalData = { firstName: 'Airan', surname: 'Sánchez', age: 24, isTeacher: false}

console.log(myData);

const buildData = (firstName: string, surname: string, age: number, isTeacher: boolean) => {
    return {
        firstName: firstName,
        surname: surname,
        age: age,
        isTeacher: isTeacher
    }
}

const createdPersonalObject = buildData('Airan', 'Sánchez', 24, false)
console.log(createdPersonalObject);

// 5
interface Spiderman {
    name: string, 
    actor: string,
    films: string[]
}

const spiderman: Spiderman = {
    name: "Peter Parket",
    actor: "Tom Holland",
    films: ["Homecomming", "Far from home", "No way home"],
}

// 6
type TypeSpiderman = {
    name: string,
    actor: string,
    films: string[]
}

// 7 
const spiderman1: TypeSpiderman = { actor: 'Peter Parker' , name: 'Tom Holland' ,  films: []}
const spiderman2: TypeSpiderman = { actor: 'Peter Parker' , name: 'Andrew Garfield',  films: []}
const spiderman3: TypeSpiderman = { actor: 'Peter Parker' , name: 'Tobie Maguire',  films: []}

// Ejercicio 8
type SpidermanBase = {
    actor: string
    name: string,
    films: string[]
}

type FirstSpiderman = SpidermanBase & { name: 'Tobie Maguire' }
type SecondSpiderman = SpidermanBase & { name: 'Andrew Garfield' }
type ThirdSpiderman = SpidermanBase & { name: 'Tom Holland' }

type FinalSpiderman = FirstSpiderman | SecondSpiderman | ThirdSpiderman

