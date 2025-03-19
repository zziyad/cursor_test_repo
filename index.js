// Simple Node.js application
console.log('Hello from Cursor!');

function greet(name) {
  return `Hello, ${name}!`;
}

// Example usage
const greeting = greet('Cursor User');
console.log(greeting);

// Export functions
module.exports = {
  greet
};