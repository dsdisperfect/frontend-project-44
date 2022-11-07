import readlineSync from 'readline-sync';

export const basisOfGames = (desc, task) => {

    let answer, correctAnswer, answerAndQuestion;
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    
    console.log(desc);


    for (let i = 0; i < 3; i++) {

        answerAndQuestion = task();

        console.log(answerAndQuestion[0]);
        answer = readlineSync.question("Your answer:");
        correctAnswer = answerAndQuestion[1];
        if (answer == correctAnswer) {
            console.log('Correct!');
        }
        else {
            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.;
            Let's try again, ${name}!`);
        }
    }

    return console.log(`Congratulations, ${name}`);

}
