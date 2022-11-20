import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  isSubmitted=false;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        address: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
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
        confirmPassword: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue]
      },

    );

  }

  Register(){
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      setTimeout(()=> this.isSubmitted = false, 2000);
      alert("Registration failed");
      return;
    }


    let register={
      name:this.registerForm.controls['name'].value,
      address:this.registerForm.controls['address'].value,
      email:this.registerForm.controls['email'].value,
      password:this.registerForm.controls['password'].value,
    }

   this.apiService.putRequest("/user/saveUser",register).subscribe((e)=>{
    console.log(e)
    return e
   })
    // console.log(login)
    // this.apiService.putRequest("/user/login", login).subscribe((e)=>{
    //   console.log(e)
    //   return e
    // })

  }

}
