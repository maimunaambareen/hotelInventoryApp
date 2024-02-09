import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren, QueryList, OnDestroy, Inject, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms'
import {RoomsListComponent} from './rooms-list/rooms-list.component'
import {HeaderComponent} from '../header/header.component'
import { RoomsService } from './services/rooms.service';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent,HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, AfterViewInit{
  
  error$= new Subject<string>;
  //the line below subsscribes to the error
  getError$ = this.error$.asObservable();

  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err)=>{
      this.error$.next(err.message);
      return of([]);
    })
  );
  
  
  //constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
  constructor(@SkipSelf() private roomService: RoomsService) {
    //console.log(this.config.apiEndpoint);
   
  }
  roomsCount$ = this.roomService.getRooms$.pipe(
    map((rooms)=>rooms.length)
  )
  
  totalBytes=0;
  subscription!: Subscription;
  
  ngOnInit(): void {
    this.roomService.getPhotos().subscribe((event)=>{
      switch(event.type){
        case HttpEventType.Sent:{ console.log('Requets is made');break;}
        case HttpEventType.ResponseHeader:{ console.log('Request success');break;}
        case HttpEventType.DownloadProgress:{ console.log('Toatl Bytes',this.totalBytes+=event.loaded);break;}
        case HttpEventType.Response:{ console.log(event.body);break;}
      }
    }
      );
    this.stream.subscribe(
      {
        next: (value) => console.log(value),
        complete: ()=>console.log('complete'),
        error: (err)=> console.log(err),
      }
    );
    this.stream.subscribe((data) => console.log(data));
    this.roomService.getRooms$.subscribe(rooms=>{this.roomList=rooms;});
  }
hotelName = 'Hilton hotel';
numberOfRooms =10;

hideRooms = true;

selectedRoom !: RoomList

rooms:Room ={
totalRooms:20,
availableRooms:10,
bookedRooms: 5
};

stream = new Observable<string>(observer =>{
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  observer.complete();
})
roomList: RoomList[]=[];
@ViewChild(HeaderComponent) headerComponent!: HeaderComponent
@ViewChildren(HeaderComponent) headerComponentChildren!: QueryList<HeaderComponent>;

title = "Rooms List"
ngAfterViewInit(){
 this.headerComponent.title= "Rooms view";
 this.headerComponentChildren.last.title="Last Title"
}

toggle(){
this.hideRooms = !this.hideRooms
this.title = "Room List";
}

selectRoom(room: RoomList){
  this.selectedRoom = room;
}
addRoom(){
  const room:RoomList=  {roomNumber:'4',roomType: 'Private suite',amenities: 'AC,GYM,Kitchen,Wifi',price:1200,photos:'https://www.angi.com/articles/8-secrets-dust-free-bedroom.htm',checkInTime: new Date('11-Nov-2021'),checkOutTime: new Date('15-Nov-2021')};
 // this.roomList.push(room);
 this.roomService.addRoom(room).subscribe((data)=> {
this.roomList =data;
 })
 //spreadOperator, add the previous data and new data
 //this.roomList = [...this.roomList, room]
}

deleteRoom(){
  this.roomService.delete('3').subscribe((data)=> {
    this.roomList =data;
     })
}

editRoom(){
  const room:RoomList=  {roomNumber:'3',roomType: 'Private suite',amenities: 'AC,GYM,Kitchen,Wifi',price:1200,photos:'https://www.angi.com/articles/8-secrets-dust-free-bedroom.htm',checkInTime: new Date('11-Nov-2021'),checkOutTime: new Date('15-Nov-2021')};
  this.roomService.editRoom(room).subscribe((data)=> {
    this.roomList =data;
     })
}

}

