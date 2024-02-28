const randomNumber = (maxNumbers) => {
    const randomNumbers = [];

    for (let i = 0; i < maxNumbers; i++) {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

const generateCountedNumbersObj = (arrayNumbers) => {
    const countedNumbersObj = {};

    arrayNumbers.forEach(number => {
        countedNumbersObj[number] = countedNumbersObj[number] ? countedNumbersObj[number] + 1 : 1;
    });

    return countedNumbersObj;
}

const result = generateCountedNumbersObj(randomNumber(10000));

console.log(result);