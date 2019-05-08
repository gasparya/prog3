class Grass extends LivingCreature {    
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

    mul() {
        this.multiply++
        let emptCells = this.getDirections()
        let newCell = random(emptCells)

        if (this.multiply >= 8 && newCell) {
            let x = newCell[0]
            let y = newCell[1]

            matrix[y][x] = 1
            this.multiply = 0
            let grass = new Grass(x, y)
            grassArr.push(grass)
        }
    }
}