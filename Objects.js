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


const clothes = {
    shirts: ['long sleeve','short sleeve','polka dots','striped'],
    pants:  ['boot cut','skinny jeans','baggy jeans','ripped jeans'], 
    shoes:  ['nikes','addidas', 'vans','supras'], 
    hats:   ['beanies', 'caps','snapbacks','fitted'],
}


