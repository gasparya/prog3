function genetareMatrix(lengthY, lengthX, number) {

    let matrix = [];
    
    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }
    
    for (let y = 0; y < lengthY; y++) {
    matrix.push([]);
    for (let x = 0; x < lengthX; x++) {
    let randomCount = getRandomInt(number);
    matrix[y].push(randomCount);
    }
    }
    return matrix;
    
    }
    
    let matrix = genetareMatrix(50,50,6);


var side = 15;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let bearArr = []
let bearEaterArr = []


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                let beEa = new BearEater(x, y)
                bearEaterArr.push(beEa)
            }
            else if (matrix[y][x] == 4) {
                let bea = new Bear(x, y)
                bearArr.push(bea)
            }
            else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 2) {
                let grassEat = new GrassEater(x, y)
                grassEaterArr.push(grassEat)
            }
            else if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass)
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("SaddleBrown")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in bearArr) {
        bearArr[i].eat()
    }
    for (let i in bearEaterArr) {
        bearEaterArr[i].eat()
    }

}