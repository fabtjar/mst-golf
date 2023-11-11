import { EventEmitter, Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  onDataUpdate = new EventEmitter();

  constructor() {
    const socket = io('https://mst-full-stack-dev-test.herokuapp.com/');
    socket.on('data-update', data => this.onDataUpdate.emit(data));
  }
}
