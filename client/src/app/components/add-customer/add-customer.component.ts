import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm!:FormGroup;
  isSubmitted=false;
  imageURL: string;
  uploadForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      ownerName: ["", Validators.required],
      mobile:['', Validators.required],
      email:["", Validators.required],
      vehicleNo:["", Validators.required],
      image:["", Validators.required],
      chesisNo:["", Validators.required],
      bikeCompany:["", Validators.required],
      address:["",Validators.required],
      engineNo:["",Validators.required]
    })
  }
  
  saveCustomer(){

  }
  cancelCust(){}

}
