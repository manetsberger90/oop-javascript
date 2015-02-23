
// OBJECTS
var person = {
    name: 'Sarah',
    country: 'US',
    age: 35,
    treehouseStudent: true,
    skills: ['JavaScript', 'CSS', 'HTML']
};

for (prop in person) {
document.write.listStyle(prop, ': ', person[prop], ', ')   
}