// Constantes
var NUMBER_OF_COLUMS = 15;
var NUMBER_OF_ROWS = 10;
var PIPE_SIZE = 50;

// Variables de la cuadricula
var gridWidth = NUMBER_OF_COLUMS * PIPE_SIZE;
var gridHeight = NUMBER_OF_ROWS * PIPE_SIZE;

// Variables del canvas
var canvas;
var context;
var canvasWidth = gridWidth + 1;
var canvasHeight = gridHeight + 1;

// Variables de la aplicación
var grid = null;
var currentButton = null;

var tileset = new Image();
tileset.src = "res/tileset.png";

$(document).ready(function() {
	canvas = document.getElementById('grid');
	context = canvas.getContext('2d');

	grid = new Grid(gridWidth, gridHeight, PIPE_SIZE);
	initUI();
	draw();
});

function initUI() {
	$(canvas).click(onGridClicked);
}

function draw() {
	clearCanvas();

	context.translate(0.5, 0.5);

	grid.draw(context);
}

function onGridClicked(event) {

	var mouseX = event.offsetX || event.layerX;
	var mouseY = event.offsetY || event.layerY;

	var column = Math.floor(mouseX / PIPE_SIZE);
	var row = Math.floor(mouseY / PIPE_SIZE);

	createPipeAt(column, row);
}

function clearCanvas() {
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
}

function createPipeAt(column, row) {
	
	var pipe = new SPipe();
	pipe.column = column;
	pipe.row = row;


	grid.addPipe(pipe, context);
}
