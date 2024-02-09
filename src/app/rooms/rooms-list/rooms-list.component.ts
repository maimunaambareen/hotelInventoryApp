import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  @Input() rooms: RoomList[] =[];
  @Input() title: string='';
  @Output() SelectedRoom = new EventEmitter<RoomList>();
ngOnInit(): void {
  
}
selectRoom(room: RoomList){
 this.SelectedRoom.emit(room);
}
ngOnDestroy(): void {
  console.log('on destroy is called')
}
}
