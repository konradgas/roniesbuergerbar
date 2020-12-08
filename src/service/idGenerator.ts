function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max)).toString();
}

export const idGenerator = () => {
    return getRandomInt(9) +
        getRandomInt(9) +
        getRandomInt(9) +
        getRandomInt(9) +
        getRandomInt(9) +
        getRandomInt(9);
}