import * as express from 'express';
import * as socketIo from 'socket.io'; 
import { createServer, Server } from 'http'; 

export class ChatServer {

    public static readonly PORT:number = 5000;
    private app: express.Application;
    private port: string | number;
    private server: Server; 

    constructor() {
        this.createApp();
        this.config();
        this.createServer(); 
	this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;
    }

    private listen(): void {
	    this.io.on('connection', (socket) => {
            socket.broadcast.emit('add-users', {
                users: [socket.id]
            });
	socket.on('disconnect', () => {
                this.socketsArray.splice(this.socketsArray.indexOf(socket.id), 1);
                this.io.emit('remove-user', socket.id);
            });
		   
        });
    }
	

    private createServer(): void {
        this.server = createServer(this.app);
    }

    public getApp(): express.Application {
        return this.app;
    }
    private createApp(): void {
  	this.app = express();
	this.app.use(express.static('public'));
    }
	private sockets(): void {
 	this.io = socketIo(this.server);
	}
	
	export class ChatServer {
        private socketsArray = [];
	
	}

	socket.on('make-offer', function (data) {
  	socket.to(data.to).emit('offer-made', {
    	offer: data.offer,
    	socket: socket.id
    });
});

socket.on('make-answer', function (data) {
  socket.to(data.to).emit('answer-made', {
    socket: socket.id,
    answer: data.answer
  });
});
}
