import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];

  constructor(private http: HttpClient) {
    //constructor(){
    console.log('RoomService instance is initialized');
  }
   header =new HttpHeaders({'token': '12345g'});
getRooms$ =  this.http.get<RoomList[]>('/api/rooms',{headers: this.header,}).pipe(shareReplay(1));

  getRooms() {
    
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
