import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  isSubmitted=false;
  // passwordmatch=true;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder,private toast: NgToastService,  private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        address: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30)
          ])
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', [Validators.required]],
      },
    );

  }

  Register(){
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      setTimeout(()=> this.isSubmitted = false, 3000);
      return;
    }
    // if(this.registerForm.controls['password'].value !== this.registerForm.controls['confirmPassword'].value  ){
    //   this.passwordmatch = false
    //   setTimeout(()=> {
    //     this.isSubmitted = false
    //     this.passwordmatch = true
    //   }, 3000);
    //   return;
    // }
    let register={
      name:this.registerForm.controls['name'].value,
      address:this.registerForm.controls['address'].value,
      email:this.registerForm.controls['email'].value,
      password:this.registerForm.controls['password'].value,
    }

   this.apiService.putRequest("/user/saveUser",register).subscribe((e)=>{
  this.showSuccess();
  this.router.navigateByUrl("/")
   },(err)=>{
this.showError();
   })
    // console.log(login)
    // this.apiService.putRequest("/user/login", login).subscribe((e)=>{
    //   console.log(e)
    //   return e
    // })

  }
  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Registration Successful',duration:2000});
  }

  showError() {
    this.toast.error({detail:"ERROR",summary:'There was some error while saving information',sticky:true,duration:2000});
  }

  showInfo() {
    this.toast.info({detail:"INFO",summary:'Your Info Message',sticky:true});
  }

  showWarn() {
    this.toast.warning({detail:"WARN",summary:'Your Warn Message',duration:5000});
  }
}
