export function onLogin() {
    alert("Hello world");
}
window.onLogin = onLogin;
function identity(arg) {
    return arg;
}
let result = identity(3);
function filterObjects(objects, condition) {
    return objects.filter(condition);
}
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
];
let youngPeople = filterObjects(people, (person) => person.age < 30);
console.log(youngPeople); // Kết quả: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 22 }]
