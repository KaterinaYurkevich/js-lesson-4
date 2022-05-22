// 1)

let student = {
    name: "Ekaterina",
    surname: "Yurkevich",
    age: 34,
    levelOfEnglish: "Pre-Intermediate",
};

console.log(student);

delete student.levelOfEnglish;

console.log(student);

// 2)

let book = {
    numberOfPages: 545,
    cover: true,
    isTheAuthorAlive: false,
    isBestseller: true,
    booksEditions: 20000000,
};

for (let key in book) {
    if (typeof book[key] === "boolean") {
        console.log(key);
    };
};

// 3)

let favoriteCar = {
    model: "Porshe",
    color: "white",
    numberOfDoors: 4,
    power: 462,
    sizeOfEngine: 2.9,
    typeOfGearbox: "Automat",
};

console.log(favoriteCar);

let newFavoriteCar = {};

Object.assign(newFavoriteCar, favoriteCar);

console.log(newFavoriteCar);

let anotherFavoriteCar = {};

for (let key in favoriteCar) {
    anotherFavoriteCar[key] = favoriteCar[key];
};

console.log(anotherFavoriteCar);

// 4)

let animalObj = {
    name: "cat",
    legs: 4,
    color: "black"
};

function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs`;
};

animal(animalObj);

console.log(animal(animalObj));

// 5)

let train = {
    locomotiveLength: 25,
    totalCoachCars: 4,
    coachLength: 15,
};

function calcLengthOfTrain(obj) {
    let length = 0;
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            length += obj[key];
        };
    };
    return length
};

let LengthOfTrain = calcLengthOfTrain(train);

console.log(train);
console.log(LengthOfTrain);

// 6)

let anotherStudent = {
    name: "Ekaterina",
    surname: "Yurkevich",
    groupNumber: 106515,
    printMessage() {
        console.log(`Это студент ${this.name} ${this.surname} из группы ${this.groupNumber}`);
    },
};

console.log(anotherStudent.printMessage());

// 7)

function Animal(kindOfAnimal, legs, isPredator, name) {
    this.kindOfAnimal = kindOfAnimal;
    this.legs = legs;
    this.isPredator = isPredator;
    this.name = name;
}

let animalCat = new Animal("cat", 4, false, "Nysha");

console.log(animalCat);