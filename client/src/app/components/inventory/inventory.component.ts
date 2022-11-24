import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgToastService } from 'ng-angular-popup';
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
  notEdit=true;


  constructor(private formBuilder:FormBuilder, private apiService: ApiService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.inventoryForm = this.formBuilder.group({
      rowId:["",Validators.required],
      materialName: ["", Validators.required],
      unit:[{value: '', disabled: true}, Validators.required],
      description:[{value: '', disabled: true}, Validators.required],
      mrp:[{value: '', disabled: true}, Validators.required],
      alertQuantity:[{value: '', disabled: true}, Validators.required],
      addQuantity:[{value: '', disabled: true}, Validators.required],
      availableQuantity:[{value: '', disabled: true}, Validators.required]
    })
    this.apiService.getRequest("/material/getAllMaterials").subscribe((d)=>{
      this.materialList = d;
      console.log(d);
    })
  }

  saveMaterial(){
    // console.log(this.inventoryForm.controls['material'].value);

    this.isSubmitted = true;
    if(this.inventoryForm.invalid){
      setTimeout(()=> this.isSubmitted = false, 2000);
      return;
    }
    let entry = {
      material: this.inventoryForm.controls['materialName'].value,
      unit: this.inventoryForm.controls['unit'].value,
      availableQty: this.inventoryForm.controls['availableQuantity'].value,
      alertQty:this.inventoryForm.controls['alertQuantity'].value,
      description:this.inventoryForm.controls['description'].value,
      purchaseQty:this.inventoryForm.controls['addQuantity'].value,
      purchaseRate:this.inventoryForm.controls['mrp'].value
    }
    this.apiService.putRequest(`/inventory/saveInventory`,entry).subscribe((d)=>{
      console.log(d);
      if (d != null) {
      this.showSuccess();
      this.isSubmitted = false;
          this.inventoryForm.reset();
      }
    },
    (err) => {
      this.showError();
    })


  }

  cancelMat(){
    // this.inventoryForm.reset();
    this.ngOnInit();
  }
  setUnit(e:any){
   this.apiService.getRequest(`/inventory/getInventoryByMaterial/${e.target.value}`).subscribe((d)=>{
      this.inventoryForm.controls['unit'].setValue(d.unit);
      this.inventoryForm.controls['rowId'].setValue(d.rowid);
      this.inventoryForm.controls['alertQuantity'].setValue(d.alertQty);
      this.inventoryForm.controls['availableQuantity'].setValue(d.availableQty);
      if(d.description !== null && d.description !== "none" ){
        this.inventoryForm.controls['description'].setValue(d.description);
      }else{
        this.inventoryForm.controls['description'].setValue(null);
      }
      this.inventoryForm.controls['alertQuantity'].enable();
      this.inventoryForm.controls['addQuantity'].enable();
      this.inventoryForm.controls['description'].enable();
      this.inventoryForm.controls['addQuantity'].setValue(null);
      this.inventoryForm.controls['mrp'].disable();
      this.inventoryForm.controls['mrp'].setValue(null);

   });

  }
  changeAvailableqty(e:any){
    this.inventoryForm.controls['availableQuantity'].setValue( parseInt( this.inventoryForm.controls['availableQuantity'].value) + parseInt(e.target.value))
  }

  checkEntry(){
    if(this.inventoryForm.controls['alertQuantity'].valid && this.inventoryForm.controls['description'].valid && this.inventoryForm.controls['addQuantity'].valid){
      this.inventoryForm.controls['mrp'].enable();
      this.inventoryForm.controls['alertQuantity'].disable();
      this.inventoryForm.controls['addQuantity'].disable();
      this.inventoryForm.controls['description'].disable();
    }
  }

  showSuccess() {
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Inventory updated Successfully',
      duration: 2000,
    });
  }

  showError() {
    this.toast.error({
      detail: 'ERROR',
      summary: 'There was some error while saving information',
      sticky: true,
      duration: 2000,
    });
  }
}
