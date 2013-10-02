var SPipe = function() {

	this.row = 0;
	this.column = 0;
	this.type = "Straight";
	this.rotation = 0;
	this.img = new Image();

	this.img.onload = function(){
	};

	this.img.src = "res/tileset.png";
    
}

SPipe.prototype.draw = function(context) {

	context.save();

	context.translate(this.column * PIPE_SIZE, this.row * PIPE_SIZE);
	context.drawImage(this.img, 0, 0, 165, 165, 0, 0, PIPE_SIZE, PIPE_SIZE);

	context.restore();

}