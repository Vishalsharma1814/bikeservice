import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-material-master',
  templateUrl: './material-master.component.html',
  styleUrls: ['./material-master.component.css']
})
export class MaterialMasterComponent implements OnInit {
  materialForm!:FormGroup;
  isSubmitted=false;

  constructor(private formBuilder:FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.materialForm = this.formBuilder.group({
      materialName: ["", Validators.required],
      unit:["", Validators.required],
      createdt:new FormControl(new Date().toISOString())
    })
  }
  saveMaterial(){
    this.isSubmitted = true;
    if(this.materialForm.invalid){
      setTimeout(()=> this.isSubmitted = false, 2000);
      return;
    }
    let matEntry = {
      materialName: this.materialForm.controls['materialName'].value,
      unit:this.materialForm.controls['unit'].value,
      createdt:this.materialForm.controls['createdt'].value
    }
    console.log(matEntry);
    this.apiService.putRequest("/material/saveMaterial", matEntry).subscribe((d)=>{
      console.log(d);
    })

  }

  cancelMat(){
    this.materialForm.reset();
    console.log("clicked!!");
  }
}
