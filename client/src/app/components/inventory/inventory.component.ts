import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventoryForm!:FormGroup;
  isSubmitted=false;
  materialList:any;
  unit:any;

  constructor(private formBuilder:FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.inventoryForm = this.formBuilder.group({
      materialName: ["", Validators.required],
      unit:[{value: '', disabled: true}, Validators.required],
      createdt:new FormControl(new Date().toISOString())
    })
    this.apiService.getRequest("/material/getAllMaterials").subscribe((d)=>{
      this.materialList = d;
      console.log(d);
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
  setUnit(e:any){
    this.apiService.getRequest(`/material/findByMatCode/${e.target.value}`).subscribe((d)=>{
      console.log(d);
      this.inventoryForm.controls['unit'].setValue(d.unit);
      console.log(this.inventoryForm.controls['unit'].value);
    });
  }
}
