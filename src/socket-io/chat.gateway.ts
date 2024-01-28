// chat.controller.ts

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/index',
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  afterInit(server: any) {
    // console.log('Esto se ejecuta cuando inicia')
  }

  handleConnection(client: any, ...args: any[]) {
    let payload = { idClient: client.id, isConnect: true };
    this.server.emit('onconnect', payload);
  }

  handleDisconnect(client: any) {
    let payload = { idClient: client.id, isConnect: false };
    this.server.emit('ondisconnect', payload);
  }

  @SubscribeMessage('events')
  handleEvent(client: Socket, payload: any) {
    this.server.emit('events', payload);
  }

  @SubscribeMessage('event_join')
  handleJoinRoom(client: Socket, room: string) {
    client.join(`room_${room}`);
  }

  @SubscribeMessage('event_message')
  handleIncommingMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    this.server.to(`room_${room}`).emit('new_message', message);
  }

  @SubscribeMessage('event_leave')
  handleRoomLeave(client: Socket, room: string) {
    client.leave(`room_${room}`);
  }

  @SubscribeMessage('chatMessage')
  handleChatMessage(client: Socket, payload: any) {
    // Este método maneja el evento 'chatMessage' enviado desde el cliente
    // Puedes emitir un mensaje de vuelta al cliente si es necesario
    this.server.emit('resChatMessage', `Servidor: ${payload}`);
  }

  @SubscribeMessage('testMessage')
  handleTestMessage(client: Socket, payload: any) {
    console.log('Test message', payload);
    // Este método maneja el evento 'testMessage' enviado desde el cliente
    // Puedes emitir un mensaje de vuelta al cliente si es necesario
    this.server.emit('testMessage', `Servidor: ${payload}`);
  }
}
