import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      entity: ['', Validators.required],
    });
  }

  onView() {
    console.log('View Button Clicked:', this.myForm.value);
  }

  onUpdate() {
    if (this.myForm.valid) {
      console.log('Update Button Clicked:', this.myForm.value);
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Submit Button Clicked:', this.myForm.value);
    }
  }
}

@Component({
  selector: 'app-form-a',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fieldA: ['', Validators.required],
      fieldB: ['', Validators.required],
    });
  }

  onSave() {
    if (this.myForm.valid) {
      console.log('Save Button Clicked:', this.myForm.value);
    }
  }
}

@Component({
  selector: 'app-form-b',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css']
})
export class FormBComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fieldX: ['', Validators.required],
      fieldY: ['', Validators.required],
    });
  }

  onDelete() {
    console.log('Delete Button Clicked:', this.myForm.value);
  }
}

@Component({
  selector: 'app-form-c',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css']
})
export class FormCComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fieldM: ['', Validators.required],
      fieldN: ['', Validators.required],
    });
  }

  onReset() {
    this.myForm.reset();
    console.log('Reset Button Clicked');
  }
}