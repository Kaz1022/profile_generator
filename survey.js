// Want to create something like this. "Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times."

//Question examples

// What's your name? Nicknames are also acceptable :) - name
// What's an activity you like doing? - activity
// What do you listen to while doing that? - music
// Which meal is your favourite (eg: dinner, brunch, etc.) - favmeal
// What's your favourite thing to eat for that meal? - favfood
// Which sport is your absolute favourite? - sport
// What is your superpower? In a few words, tell us what you are amazing at! - power

// `${name} loves listening to ${music} while ${activity}, devouring ${favfood} for ${favmeal}, likes ${sport}, and is amazing at ${power}!`

//reads the whole sentence
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nickname is also acceptable! `, (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (music) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (favmeal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (favfood) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (power) => {
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${favfood} for ${favmeal}, likes ${sport}, and is amazing at ${power}!`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});
