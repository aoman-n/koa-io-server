import * as http from 'http';
import * as socketio from 'socket.io';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const ioEvents = (io: SocketIO.Server) => {
  io.on('connection', socket => {
    console.log('client connected');
    delay(4000).then(() => {
      console.log('経過しました');
      socket.emit('finished recognition', '完了しました！');
    });
  });
};

const init = (server: http.Server) => {
  const io = socketio.listen(server);
  ioEvents(io);
};

export default init;
