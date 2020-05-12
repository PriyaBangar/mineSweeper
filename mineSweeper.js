function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows)
    }
    return arr;
}

var grid, cols, rows;
var w = 20;
var totalBees = 20;

function setup() {
    createCanvas(201, 201);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = new make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }

    //pick random spot for bees
    var options = [];

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            options.push([i, j]);
        }
    }
    for (var n = 0; n < totalBees; n++) {
        var index = floor(random(options.length));
        var chooseCell = options[index];
        var i = chooseCell[0];
        var j = chooseCell[1];
        options.splice(index, 1);
        grid[i][j].bee = true;
    }


    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].countBees();
        }
    }

}

function mousePressed() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                grid[i][j].reveal();
                if (grid[i][j].bee) {
                    gameOver();
                }
            }
        }
    }
}

function draw() {
    background(255);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}

function gameOver() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].revealed = true;
        }
    }
}