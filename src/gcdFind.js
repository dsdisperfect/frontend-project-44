export const gcdFind = (a, b) => {
    let result;
    for (let i = 1; i <= 100; i++) {
        if (a % i === 0 && b % i === 0) {
            result = i;
        }
    }
    return result;
}