import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  public fg: FormGroup = this.fb.group({
    name: [null, Validators.required],
    password: [null, Validators.required],
  });

  getData() {
    console.log(this.fg.get('name')?.value);
    console.log(this.fg.get('password')?.value);
  }
}
