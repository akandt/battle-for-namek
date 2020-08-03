// Variables
let userName = '';
let userHealth = 40;
let friezaHealth = 10;
let friezaLives = 3;


// Functions
const attack = () => Math.floor(Math.random() * 2) + 1;
const startBattle = () => {
    while (friezaHealth > 0) {
        friezaHealth = friezaHealth - attack();
        if (friezaHealth > 0){
            userHealth = userHealth - attack();
        }
        // Don't want negative health, so setting to 0
        if (friezaHealth < 0){
            friezaHealth = 0;
        }
        if (userHealth < 0){
            userHealth = 0;
        }
        console.log(`Frieza has ${friezaHealth} health left.`);
        console.log(`${userName} has ${userHealth} health left.`);
        if (friezaHealth <= 0){
            friezaLives--;
            console.log('Frieza has been defeated!')
            console.log(`Frieza has ${friezaLives} forms left.`);
        }
        if (userHealth <= 0){
            console.log(`${userName} has lost. Better luck next time!`)
            break;
        }
    }
};


// Game Play
let startGame = prompt('Would you like to play a game? Yes or No?');
if (startGame.toLowerCase() === 'yes') {
    userName = prompt(`What is your character's name?`);
    console.log(`${userName} has challenged Frieza. Begin!`);
    while (friezaLives > 0 && userHealth > 0){
        startBattle();
        friezaHealth = 10;
    }
    console.log('Game over!');
} else {
    console.log('Maybe next time.');
};