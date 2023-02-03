import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpService } from "./http.service";
import { FormControl } from '@angular/forms';


import { Register } from './register.model';
import { User } from './user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userModel= new User('Saachi','saa')
  loading = false;
  buttionText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);





  




  constructor (private _myserviceService:MyserviceService,public http: HttpService){

  }
  


  

  submit()
  {
    
    this._myserviceService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => console.log('Error')
      )
  }

  register() {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value
    }
    // this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
    //   data => {
    //     let res:any = data; 
    //     console.log(
    //       `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
    //     );
    //   },
    //   err => {
    //     console.log(err);
    //     this.loading = false;
    //     this.buttionText = "Submit";
    //   },() => {
    //     this.loading = false;
    //     this.buttionText = "Submit";
    //   }
    // );

  
  
}
}





