import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers: [RoomsService]
})
export class EmployeeComponent {
  constructor(private roomService: RoomsService) {
   
  }
  empName:string='John';
  ngOnInit():void{
    console.log("Employee compomenet is called")
  }
}
