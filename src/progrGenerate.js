import { randomIntenger } from "./randomIntenger.js";

export const progrGenerate = () => {
    let num = randomIntenger(1, 20);
    let step = randomIntenger(1, 10);
    let length = randomIntenger(5, 10);


    let col = [num];

    for (let i = 1; i < length - 1; i++) {
        col[i] = (num + step);
        num = col[i];
    }
    return col;
}