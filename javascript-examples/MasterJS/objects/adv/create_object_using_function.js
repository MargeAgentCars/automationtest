/*
Creating a JS object using function
*/

function createStudent(name, age, country, company){
    const student = {}
    student["name"] = name
    student["age"] = age
    student["country"] = country
    student["company"] = company
    return student
}

const s1 = createStudent("Mayur Deshmukh", 24, "USA", "Apple")
const s2 = createStudent("Shravya Deshmukh", 10, "India", "Dezlearn")

console.log(s1)
console.log(s2)

