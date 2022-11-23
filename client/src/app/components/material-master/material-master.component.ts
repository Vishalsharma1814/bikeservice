import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-material-master',
  templateUrl: './material-master.component.html',
  styleUrls: ['./material-master.component.css'],
})
export class MaterialMasterComponent implements OnInit {
  materialForm!: FormGroup;
  isSubmitted = false;
  unitList: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.materialForm = this.formBuilder.group({
      materialName: ['', Validators.required],
      unit: ['', Validators.required],
    });
    this.apiService.getRequest('/material/getAllUnits').subscribe((d) => {
      this.unitList = d;
    });
  }
  saveMaterial() {
    this.isSubmitted = true;
    if (this.materialForm.invalid) {
      setTimeout(() => (this.isSubmitted = false), 2000);
      return;
    }
    let matEntry = {
      materialName: this.materialForm.controls['materialName'].value,
      unit: this.materialForm.controls['unit'].value,
    };
    this.apiService.putRequest('/material/saveMaterial', matEntry).subscribe(
      (d) => {
        if (d != null) {
          this.showSuccess();
          this.isSubmitted = false;
          this.materialForm.reset();
        }
      },
      (err) => {
        this.showError();
      }
    );
  }

  cancelMat() {
    this.materialForm.reset();
    console.log('clicked!!');
  }

  showSuccess() {
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Material Saved Successfully',
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

  showInfo() {
    this.toast.info({
      detail: 'INFO',
      summary: 'Your Info Message',
      sticky: true,
    });
  }

  showWarn() {
    this.toast.warning({
      detail: 'WARN',
      summary: 'Your Warn Message',
      duration: 5000,
    });
  }
}
