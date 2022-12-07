import { UserAuthentication } from 'src/app/authentication/interfaces/user-authentication';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private service: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  public fg: FormGroup = this.fb.group({
    name: [null, Validators.required],
    password: [null, Validators.required],
  });

  login() {
    const object: UserAuthentication = {
      userName: this.fg.get('name')?.value,
      password: this.fg.get('password')?.value,
    };

    if (object) {
      this.service.userAuthentication(object).subscribe({
        next: () => {
          this.router.navigate(['animals']);
        },
        error: (error) => {
          alert('Oops, Usuário ou senha inválidos!!');
          console.log(error);
        },
      });
    }
  }
}
