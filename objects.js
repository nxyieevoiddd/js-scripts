let person = {
    name: "Anna",
    age: 20,
    isStudent: true
};

console.log("Vārds (dot notation): " + person.name);
console.log("Vārds (bracket notation): " + person["name"]);

if (person.age >= 18) {
    console.log(person.name + " ir pilngadīga.");
} else {
    console.log(person.name + " nav pilngadīga.");
}

if (person.isStudent) {
    console.log(person.name + " ir students.");
} else {
    console.log(person.name + " nav students.");
}

person.course = "PT2024";
console.log("Jaunais kurss: " + person.course);

console.log(person);