import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
// import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: FormGroup;
  files: { [key: string]: File } = {};

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      personalSecurityCompanyName: ['', Validators.required],
      businessLicense: ['', Validators.required],
      tinNumber: ['', Validators.required],
      managerFullName: ['', Validators.required],
      kebeleId: ['', Validators.required]
    });
  }

  onFileSelected(event: Event, fileType: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.files[fileType] = input.files[0];
      this.form.patchValue({
        [fileType]: input.files[0].name
      });
      this.form.get(fileType)?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = new FormData();
      Object.keys(this.form.controls).forEach(key => {
        if (this.files[key]) {
          formData.append(key, this.files[key]);
        } else {
          formData.append(key, this.form.get(key)?.value);
        }
      });

      // Handle form submission, e.g., send formData to the server
      console.log('Form submitted:', formData);
    } else {
      console.log('Form is invalid');
    }
  }
}
