import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: string='';
password:string='';

constructor(private route: Router){}
ngOnInit():void{

}
Login(){
  if(this.email==="admin@gmail.com" && this.password==="Admin"){
  
  //this.route.navigate(['/rooms','add']); 
  this.route.navigateByUrl('/rooms/add'); 
   alert("Login success");
  }
}
}
