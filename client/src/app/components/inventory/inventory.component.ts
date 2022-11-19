import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventoryForm!:FormGroup;
  isSubmitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.inventoryForm = this.formBuilder.group({
      materialName: ["", Validators.required],
      unit:["", Validators.required],
      createdt:new FormControl(new Date().toISOString())
    })
  }

  saveMaterial(){
    console.log(this.inventoryForm.controls['createdt'].value);
    this.isSubmitted = true;
    if(this.inventoryForm.invalid){
      setTimeout(()=> this.isSubmitted = false, 2000);
      return;
    }
  }

  cancelMat(){
    this.inventoryForm.reset();
    console.log("clicked!!");
  }
}
