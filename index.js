//REQ #1 - It should have a place to store todos

var todos = [`Study algorithms`, `White boarding practice`, `Get a job`];

//REQ #2 - It should have a way to display todos

console.log(`My Todos`, todos)

//REQ #3 - It should have a way to add new todos

todos.push(`Live happily ever after`);
console.log(`My Todos`, todos);

//REQ #4 - It should have a way to change a todo

todos[0] = `Read Cracking the Coding Interview`;
console.log(`My Todos`, todos);

//REQ #5 - It should have a way to delete a todo

todos.splice(3,1);
console.log(`My Todos`, todos);

//Version 1 COMPLETE