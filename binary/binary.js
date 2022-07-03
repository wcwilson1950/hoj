const binary = (n) => (n === 0 || n === 1) ? String(n) : binary(Math.floor(n / 2)) + String(n % 2);
module.exports = binary;
