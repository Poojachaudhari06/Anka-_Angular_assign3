import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import{ApiService} from '../services/api.service'
import { HttpClient } from '@angular/common/http';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { error } from '@angular/compiler/src/util';




export function passwordMatchValidator(control: FormGroup): ValidationErrors | null {
  const password = control.get('password');
  const confirmpassword = control.get('confirmpassword');

  if (password && confirmpassword && password.value !== confirmpassword.value) {
    confirmpassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    confirmpassword?.setErrors(null);
    return null;
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})




export class RegistrationComponent implements OnInit {
  public registrationForm !: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router,private api:ApiService) { }

  ngOnInit(): void {
    this.registrationForm=this.formBuilder.group({
  
      firstName:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')])],
      lastName:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')])],
      mobile:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]*$')])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      select:['',Validators.required],
      password:['',Validators.required],
     confirmpassword:['',Validators.required],
     },
    //  {
    //   validator: ConfirmPasswordValidator("password", "confirmPassword")
    // }
    {
      validator: passwordMatchValidator
    });
    
   
  }

 
  Register(){
    console.log(this.registrationForm.value)
    if(this.registrationForm.valid){
      this.api.postreg(this.registrationForm.value)
      .subscribe({
        next:(res)=>{
          alert("Add Succesfully")
          this.registrationForm.reset();
          // this.dialogRef.close('save');
   } });
 
      }
  }
}


