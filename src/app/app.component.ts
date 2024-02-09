import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from './container/container.component';
//import { EmployeeComponent } from './employee/employee.component';
import {RouterModule} from '@angular/router';
import {AppNavComponent} from './app-nav/app-nav.component'
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule,ContainerComponent,AppNavComponent,FormsModule],
  templateUrl: './app.component.html',
 // template: `<h1>Hello world from inline template!</h1>
  //<p>Angular is awesome</p>`,
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'hotelinventoryapp';
  role ='Admin'

  /*@ViewChild('user', {read:ViewContainerRef}) vcr!: ViewContainerRef;
  ngAfterViewInit(){
   const componentRef = this.vcr.createComponent(RoomsComponent);
  componentRef.instance.numberOfRooms=50;
  }*/
}
