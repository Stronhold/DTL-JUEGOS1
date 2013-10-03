var Straight = function() {

	this.row = 0;
	this.column = 0;
	this.type = "Straight";
	this.rotation = 0;
	this.img = tileset;
    
}

Straight.prototype.draw = function(context) {

	context.save();

	context.translate(this.column * PIPE_SIZE, this.row * PIPE_SIZE);

    context.translate(PIPE_SIZE / 2, PIPE_SIZE / 2);
    context.rotate(this.rotation * Math.PI / 180);
    context.translate(- PIPE_SIZE / 2, - PIPE_SIZE / 2);
    
	context.drawImage(this.img, 0, 0, 165, 165, 0, 0, PIPE_SIZE, PIPE_SIZE);

	context.restore();

}