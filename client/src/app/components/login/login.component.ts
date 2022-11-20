import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,  FormBuilder, } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm!:FormGroup;
 isSubmitted=false;
  constructor(private http:HttpClient, private formBuilder:FormBuilder,private router:Router, private apiService:ApiService) { }

Login(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      setTimeout(()=> this.isSubmitted = false, 2000);
      return;
    }
    let login = {
      email: this.loginForm.controls['email'].value,
      password:this.loginForm.controls['password'].value,

    }
    this.apiService.putRequest('/user/login', login).subscribe((e:any)=>{
      console.log(e)
      if(e==null){
        alert("invalid Credentials")
      }else{
        sessionStorage.setItem("usercode",e.usercode)
        sessionStorage.setItem("userName",e.name)
        sessionStorage.setItem("isLoggedIn","true")
        this.router.navigateByUrl('/dashboard')

      }
    },(err)=>{
      console.log(err)
    })
    // this.http.put('http://localhost:8081/user/login', login).subscribe((e:any)=>{
    //   console.log(e)
    //   if(e==null){
    //     alert("invalid Credentials")
    //   }else{
    //     sessionStorage.setItem("usercode",e.usercode)
    //     sessionStorage.setItem("userName",e.name)
    //     sessionStorage.setItem("isLoggedIn","true")
    //     this.router.navigateByUrl('/dashboard')

    //   }

    // },(err)=>{
    //   console.log(err)
    // })

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password:["", Validators.required],

    });
  }

}
