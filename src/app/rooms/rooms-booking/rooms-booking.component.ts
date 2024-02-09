import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent {
  id$ = this.router.params.pipe(map(params => params['id']))
  
  constructor(private router: ActivatedRoute){
  }
  ngOnInit(): void{
 
  }

}
