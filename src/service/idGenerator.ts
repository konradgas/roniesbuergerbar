function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max)).toString();
}

export const idGenerator = (idLength: number = 6) => {
    let id = getRandomInt(9);
    for (let i = 1; i < idLength; i++) {
        id = id + getRandomInt(9);
    }

    return id;
}