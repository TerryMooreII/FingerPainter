var io = require('socket.io').listen(8888);

io.sockets.on('connection', function (socket) {
  
  socket.on('new', function (data){
	  var data = {
  		color: data.color,
  		size: data.size,
      shape: data.shape,
  		x: data.x,
  		y: data.y
  	};
  	socket.broadcast.emit('new', data)
  });

  socket.on('update', function (data) {
  	var update = {
  		x: data.x,
  		y: data.y
  	};
  	socket.broadcast.emit('update', update)
  });

});