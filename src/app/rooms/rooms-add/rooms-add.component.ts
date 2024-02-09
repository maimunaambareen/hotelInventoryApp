import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css',
})
export class RoomsAddComponent {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photos: '',
    price: 0,
    roomNumber: '',
  };
  successMessage: string = '';
  constructor(private roomService: RoomsService) {}
  AddRoom(roomsForm: NgForm) {
    this.roomService
      .addRoom(this.room)
      .subscribe((data) => (this.successMessage = 'Room Added Successfully'));
      roomsForm.reset();
  }
}
