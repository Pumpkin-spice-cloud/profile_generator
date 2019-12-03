const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const inputAnswers = {}
rl.question("What's your name? Nicknames are also acceptable :)"
  , (answer) => {
    console.log(`Oh, cool name... ${answer}`);
    inputAnswers.name = answer;
    rl.question("What's an activity you like doing? ", (answer) => {
      console.log(`Oh, so you're active aren't you... ${answer}`)
      inputAnswers.activity = answer;
      rl.question("What do you listen to while doing that? ", (answer) => {
        console.log(`Oh, so you're active aren't you... ${answer}`)
        inputAnswers.listen = answer;
        rl.question(" Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
          console.log(`${answer} a great meal`)
          inputAnswers.meal = answer
          rl.question(" What's your favourite thing to eat for that meal? ", (answer) => {
            console.log(`${answer} sounds delicious`)
            inputAnswers.food = answer;
            rl.question(" Which sport is your absolute favourite?", (answer) => {
              console.log(`${answer} is an interesting sport `)
              inputAnswers.sport = answer;
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                console.log(`${answer} is an interesting sport `)
                inputAnswers.superpower = answer;
                console.log(inputAnswers)
                console.log(`My name is ${inputAnswers.name} and I like to ${inputAnswers.activity} while listening to ${inputAnswers.listen}. My favorite meal is ${inputAnswers.meal} and my favorite food is ${inputAnswers.food} for ${inputAnswers.meal}. My favorite sport is ${inputAnswers.sport}. If I could have a superpower it would be ${inputAnswers.superpower} `)
                rl.close()

              })

            })

          })

        })


      })


    })


  });