const express = require('express');
const app = express();
const server = app.listen(3000);
const io = require('socket.io').listen(server);
const data = require('./mock');

app.use('/', express.static('dist'));

io.on('connection', socket => {
    console.log(`Use is connected ${socket.id}`);

    socket.join(`areaChartRoom ${socket.id}`);
    io.in(`areaChartRoom ${socket.id}`).emit(
        'areaChartData',
        data.areaData.mock1
    );
    setInterval(() => {
        io.in(`areaChartRoom ${socket.id}`).emit(
            'areaChartData',
            data.areaData.mock2()
        );
    }, 10000);
});
