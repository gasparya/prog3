class Bear extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 8
    }
    chooseCell() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    
    move() {
        let fundCords = this.getDirections(0)
        let cord = random(fundCords)
        if (cord) {
            let x = cord[0]
            let y = cord[1]

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0


            this.x = x
            this.y = y
        }
    }
    eat() {
        var fundCords1 = this.getDirections(2);
        var fundCords2 = this.getDirections(3)
        let fundCords = fundCords1.concat(fundCords2)
        var cord = random(fundCords);

        if (cord) {
            console.log(cord)
            var x = cord[0];

            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;

            
                for (var i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1)
                    }
                }
            
            
                for (var i in predatorArr) {
                    if (x == predatorArr[i].x && y == predatorArr[i].y) {
                        predatorArr.splice(i, 1)
                    }
                }
            

            if (this.multiply == 30) {
                this.mul()
                this.multiply = 0;
            }

        } else {

            this.move();
            this.energy--;
            if (this.energy == 0) {
                this.die();
            }
        }
    }
    mul() {
        let fundCords = this.getDirections(0);
        let cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            let norBear = new Bear(x, y);
            bearArr.push(norBear);

            matrix[y][x] = 4;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in bearArr) {
            if (this.x == bearArr[i].x && this.y == bearArr[i].y) {
                bearArr.splice(i, 1)
            }
        }
    }
}