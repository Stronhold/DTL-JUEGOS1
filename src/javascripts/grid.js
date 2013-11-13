var Grid = function(width, height, cellSize) {

  this.width = width;
  this.height = height;
  this.cellSize = cellSize;

  this.pipes = [];
}

Grid.prototype.drawGrid = function(context) {
  
  context.strokeRect(0, 0, this.width, this.height);

  var numberOfColumns = this.width / this.cellSize;
  var numberOfRows = this.height / this.cellSize;

  context.beginPath();

  for (var column = 0; column < numberOfColumns; column++) {
    context.moveTo(column * this.cellSize, 0);
    context.lineTo(column * this.cellSize, gridHeight);
  }

  for (var row = 0; row < numberOfRows; row++) {
    context.moveTo(0, row * this.cellSize);
    context.lineTo(gridWidth, row * this.cellSize);
  }

  context.stroke();
}

Grid.prototype.clear = function() {
  this.pipes = [];
}

Grid.prototype.draw = function(context) {

  this.drawGrid(context);

  for (var i = 0; i < this.pipes.length; i++) {
    this.pipes[i].draw(context);
  }
}

Grid.prototype.addPipe = function(pipe, context) {
  this.pipes.push(pipe);

  pipe.draw(context);
}

Grid.prototype.getPipeAt = function(column, row) {
  for (var i = 0; i < this.pipes.length; i++) {
    if (this.pipes[i].column === column && this.pipes[i].row === row) {
      return this.pipes[i];
    }
  }

  return null;
}

Grid.prototype.deletePipeAt = function(column, row) {
  for (var i = 0; i < this.pipes.length; i++) {
    if (this.pipes[i].column === column && this.pipes[i].row === row) {
      this.pipes.splice(i,1);
    }
  }
}