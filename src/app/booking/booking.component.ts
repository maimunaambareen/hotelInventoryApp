import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'hinv-booking',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  bookingForm!: FormGroup;
  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(private form: FormBuilder) {}
  ngOnInit(): void {
    this.bookingForm = this.form.group({
      roomId: new FormControl(''),
      guestEmail: ['',{updateOn: 'blur'}],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.form.group({
        addressLine1: [''],
        addressLine2: [''],
        City: [''],
        State: [''],
        Country: [''],
        ZipCode: [''],
      }),
      guestCount: [''],
      guests: this.form.array([
        this.form.group({
          guestNme: [''],
          age: new FormControl(''),
        }),
      ]),
    });
   /*  this.bookingForm.valueChanges.subscribe((data)=>{
      console.log(data);
    }); */
  }
  addBooking(): void {
    console.log(this.bookingForm.getRawValue);
  }
  addGuest():void{
    this.guests.push(this.form.group({
      guestNme: [''],
      age: new FormControl(''),
    })
    );
  }
}
