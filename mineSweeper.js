function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows)
    }
    return arr;
}

function Cell(x, y, w) {
    this.bee = true;
    this.revealed = true;
    this.x = x;
    this.y = y;
    this.w = w;
}

Cell.prototype.show = function() {
    rect(this.x, this.y, this.w, this.w);
};

var grid, cols, rows;
var w = 20;

function setup() {
    createCanvas(201, 201);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = new make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i * w, j * w, w);
        }
    }
}

function draw() {
    fill(255);
    background(0);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}