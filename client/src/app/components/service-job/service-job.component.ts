import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-service-job',
  templateUrl: './service-job.component.html',
  styleUrls: ['./service-job.component.css'],
})
export class ServiceJobComponent implements OnInit {
  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      serviceFullDetails: ['', Validators.required],
      totalKm: ['', Validators.required],
      bikeNo: [{ value: '', disabled: true }, Validators.required],
      lastService: [{ value: '', disabled: true }, Validators.required],
      serviceDate: [{ value: '', disabled: true }, Validators.required],

      skills: this.fb.array([]),
    });
  }

  title = 'FormArray Example in Angular Reactive forms';

  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      serviceFullDetails: '',
      totalKm: '',
      bikeNo: '',
      lastService: '',
      serviceDate: '',

      skills: this.fb.array([]),
    });
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      materialName: '',
      materialQuantity: '',
      materialRate: '',
      totalMaterialRate: '',
    });
  }

  form = new FormGroup({
    website: new FormControl('', Validators.required),
  });

  get f() {
    return this.form.controls;
  }
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
