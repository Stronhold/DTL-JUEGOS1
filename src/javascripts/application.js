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
	canvas = $('.editor canvas')[0];
	context = canvas.getContext('2d');

	grid = new Grid(gridWidth, gridHeight, PIPE_SIZE);
	initUI();
	draw();
});

function initUI()
{
	$(canvas).click(onGridClicked);

	$(".pipes button").click(function(event)
	{
		event.preventDefault();

		var id = $(this).attr("id");
		setPipe(id);
	});

	$("#clear-level").click(function(event)
	{
		event.preventDefault();

		grid.clear();
		draw();
	});

	$(".tools button").click(function(event)
	{
		event.preventDefault();

		var id = $(this).attr("id");
		setButton(id);
	});

	$("#save-level").click(function(event)
	{
	//	event.preventDefault();

		save();
	});
}

function draw()
{
	clearCanvas();
	context.translate(0.5, 0.5);
	grid.draw(context);
}

function onGridClicked(event)
{
	var mouseX = event.offsetX || event.layerX;
	var mouseY = event.offsetY || event.layerY;

	var column = Math.floor(mouseX / PIPE_SIZE);
	var row = Math.floor(mouseY / PIPE_SIZE);

	var selectedPipe = grid.getPipeAt(column, row);

	if (currentButton.attr("id") === "delete-pipe")
	{
	  grid.deletePipeAt(column, row);
	  draw();
	}
	else if (selectedPipe)
	{
		selectedPipe.rotation += 90;
		draw();
	}
	else
	{
		createPipeAt(column, row);
	}
}

function clearCanvas()
{
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
}

function createPipeAt(column, row)
{
	if ( ! selectedPipeClass) return;

	var pipe = new selectedPipeClass();
	pipe.column = column;
	pipe.row = row;

	grid.addPipe(pipe, context);
}

function setPipe(buttonID)
{
	setButton(buttonID);

	switch (buttonID)
	{
		case "straight-pipe":
			selectedPipeClass = Straight;
		break;
		case "curved-pipe":
			selectedPipeClass = Curved;
	}
}

function setButton(buttonID)
{
	if (currentButton)
	{
		currentButton.removeAttr("disabled");
	}
	currentButton = $("#"+buttonID);
	currentButton.attr("disabled", "disabled");
}

function save()
{
	for (var i = 0; i < grid.getWidth(); i++)
	{
		for (var h = 0; h < grid.getHeight(); h++)
		{
			var pipe = grid.getPipeAt(i, h);
			//TODO
		}
	}
}