import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{FormBuilder,FormGroup, Validators,} from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform !:FormGroup;


  



  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this .loginform=this.formBuilder.group({
      email:['' ,Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    });
  }

  login(){
    if(this.loginform.valid){
this.http.get<any>("http://localhost:3000/reg")
.subscribe(res=>{
  const user=res.find((a:any)=>{
  return a.email===this.loginform.value.email && a.password===this.loginform.value.password
  });
  if(user){
    alert("login sucess");
    this.loginform.reset();
    this.router.navigate(['dashboard'])
  }else{
    alert("user not found");
    this.loginform.reset();
  }
})
    
  }
}

}
