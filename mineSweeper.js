function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows)
    }
    return array;
}

function Cell(w, x, y) {
    this.bee = true;
    this.revealed = true;
    this.x = x;
    this.y = y;
    this.w = w;
}

Cell.prototype.show = function() {

    rect(this.x, this.y, this.w, this.h)
};

var grid, cols, rows;
var w = 20;
var width, height = 201;

function gridSetUp() {
    createCanvas(width, height);
    cols = floor(width / w);
    row = floor(height / w);
    grid = new make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show(i * w, j * w, w);
        }
    }
}

function draw() {
    background(0);

}