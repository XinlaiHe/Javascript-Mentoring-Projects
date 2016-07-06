'use strict';
const net = require('net');

let users = []
//at console enter telnet localhost 7171
net.createServer((sock) => {

  sock.setEncoding('utf-8');
  sock.on('readable', () => {

    let chunk = sock.read();

    if(chunk == null) {

      return;

    }else if(chunk.startsWith('name')){
      let arr =  chunk.split(':');
      sock.name = arr[1];
      users.push(sock);
      console.log(sock.name + ' connected');
      //console.log("total users " + users.length);
      return;
    }else if(users.length != 0 && sock.name){
      let who = sock;
      users.forEach((sock) => {
        if(who.name != sock.name)
          sock.write(who.name + ' says ' + chunk);
      })
      return;
    }

  });

  sock.on('end', () => {
    console.log(sock.name + " disconnected");
  });

}).listen(7171);