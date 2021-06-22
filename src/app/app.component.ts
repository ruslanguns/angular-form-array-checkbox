import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'form with Checkbox';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      roles: this.fb.group({
        read: [''],
        write: [''],
        drop: ['']
      })
    });

    this.form.patchValue({
      username: 'ruslanguns',
      roles: {
        read: true,
        write: false,
        drop: true
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
