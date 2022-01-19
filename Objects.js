const game = {}

console.log(typeof game); 

const game = {videoGame: "Super Mario"}; 

console.log(game); 

// Defining an object with a single property or a couple of “short” properties on a single line of code 

let point = {x : 10, y: 15};

console.log(point); 

// Properties are separated by commas

const game = {
    videoGame: "Super Mario",
    gameSystem:"Nintendo 64" 
}

console.log(game); 

// Syntactically, trailing commas are permitted and encouraged (as well as in arrays too)

const game = {
    videoGame: "Super Mario",
    gameSystem:"Nintendo 64",
}

console.log(game); 

// Adding Properties to an Object with Dot Notation

game.newGame = 'Pokémon Stadium'; 

console.log(game); 

game.numGuesses = 0; 

game.videoGame = 'Banjo and Kazooey'

console.log(game); 


// Accessing Properties with Square Bracket Notation

const words = {
    'animals': ['fox', 'zebra', 'bear', 'turkey'], 
    'colors': ['purple', 'orange', 'green'],  
    };

    const wordList = words['animals']; 

    console.log(wordList); 

    const newWords = words['colors']; 

    console.log(newWords); 


// Part 1 
const catalog = {

    'KRTHG345': 10, 
    'HSNTHG432': 12,
    'OTYIUMM678':24,
    'THYNGHE579': 90,
}

let sku = '';
while (sku !== 'quit') {
sku = prompt('Enter SKU or "quit" to exit: ');
let price = catalog[sku];
if (sku !== 'quit') alert(`The price of ${sku} is ${price}`);
}

// Part 2 


const catalog = {

    'KRTHG345': 10, 
    'HSNTHG432': 12,
    'OTYIUMM678':24,
    'THYNGHE579': 90,
}




let sku = '';
while (sku !== 'quit') {
  sku = prompt('Enter SKU or "quit" to exit: ');
  if (sku in catalog) {
    let price = catalog[sku];
alert(`The price of ${sku} is ${price}`); } 

else if (sku !== 'quit') {
alert('Invalid SKU - try again');
}
}



