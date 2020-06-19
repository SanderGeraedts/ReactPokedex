const pokemons = require("./pokedex.json");
const moves = require("./moves.json");
const items = require("./items.json");
const types = require("./types.json");

let counter = 1;

let names = [];
let bases = [];

pokemons.forEach(pokemon => {
  let id = counter;
  let name = { id, ...pokemon.name };
  let base = { id, ...pokemon.base };
  pokemon.name_id = counter;
  pokemon.basis_id = counter;

  delete pokemon.name;
  delete pokemon.base;

  counter++;

  names.push(name);
  bases.push(base);
});

items.forEach(item => {
  let id = counter;
  let name = { id, ...item.name };
  item.name_id = counter;

  delete item.name;

  counter++;

  names.push(name);
});

module.exports = {
  pokemons,
  names,
  bases,
  types,
  moves,
  items
};
