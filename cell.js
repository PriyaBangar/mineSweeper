function Cell(i, j, w) {
    this.i = i;
    this.j = j;
    this.w = w;
    this.x = i * w;
    this.y = j * w;
    this.neighborCount = 0;

    this.bee = false;
    this.revealed = false;
}

Cell.prototype.show = function() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);

    if (this.revealed) {
        if (this.bee) {
            fill("red");
            ellipse(this.x + this.w / 2, this.y + this.w / 2, this.w / 2, this.w / 2);
        } else {
            fill("orange");
            rect(this.x, this.y, this.w, this.w);
            if (this.neighborCount != 0) {
                textAlign(CENTER);
                fill(0);
                text(this.neighborCount, this.x + this.w / 2, this.y + 4 + this.w / 2);
            }

        }
    }
};

Cell.prototype.contains = function(x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
    this.revealed = true;
    if (this.neighborCount == 0) {
        this.revealNeighbor();
    }
};

Cell.prototype.revealNeighbor = function() {
    for (var xoff = -1; xoff <= 1; xoff++) {
        for (var yoff = -1; yoff <= 1; yoff++) {
            var i = this.i + xoff;
            var j = this.j + yoff;
            if (i > -1 && i < cols && j > -1 && j < rows) {
                var neighborCell = grid[i][j];
                if (!neighborCell.bee && !neighborCell.revealed) {
                    neighborCell.reveal();
                }
            }
        }
    }
};

Cell.prototype.countBees = function() {
    if (this.bee) {
        this.neighborCount = -1;
        return;
    }

    var total = 0;

    for (var xoff = -1; xoff <= 1; xoff++) {
        for (var yoff = -1; yoff <= 1; yoff++) {
            var i = this.i + xoff;
            var j = this.j + yoff;
            if (i > -1 && i < cols && j > -1 && j < rows) {
                var neighborCell = grid[i][j];
                if (neighborCell.bee) {
                    total++;
                }
            }
        }
    }
    this.neighborCount = total;
};