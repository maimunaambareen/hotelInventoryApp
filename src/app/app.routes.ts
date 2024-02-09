import {  Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';


export const routes: Routes = [
    {
        path: 'employee', component: EmployeeComponent
    },
    {
        path: 'rooms', component: RoomsComponent
    },
    {
        path: 'rooms/add', component: RoomsAddComponent
    },
    {
        path: 'rooms/:id', component: RoomsBookingComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch:'full'
    },
    {
        path:'booking', component: BookingComponent
        //loadChildren:()=>import('./booking/booking.module').then((m)=>m.BookingModule),
        
    },
    {
        path: '**', component: NotFoundComponent
    },
    
];
