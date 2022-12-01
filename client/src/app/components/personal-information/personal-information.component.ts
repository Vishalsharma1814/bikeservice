import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,  FormBuilder, } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
 profileForm!:FormGroup;
  usercode:any;
  constructor(private apiService:ApiService ,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    
    this.usercode= sessionStorage.getItem("usercode")
    this.apiService.getRequest(`/user/getUserByUserCode/${this.usercode}`).subscribe((e)=>{
      this.profileForm = this.formBuilder.group({
        name: [e.name, Validators.required],
        email:[e.email, Validators.required],
        address:[e.address, Validators.required],
  
      });

    })
  }

  Register(){

  }

}
