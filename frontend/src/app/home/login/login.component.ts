import { UserAuthentication } from 'src/app/authentication/interfaces/user-authentication';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private service: AuthenticationService
  ) {}
  ngOnInit(): void {}

  public fg: FormGroup = this.fb.group({
    name: [null, Validators.required],
    password: [null, Validators.required],
  });

  login() {
    if (this.fg.invalid) {
      alert('Oops, Por Gentileza, preencher todos os campos!!');
      return;
    }

    const object: UserAuthentication = {
      userName: this.fg.get('name')?.value,
      password: this.fg.get('password')?.value,
    };

    if (object) {
      this.service.userAuthentication(object).subscribe({
        next: () => {
          console.log('Autenticado com sucesso!');
        },
        error: (error) => {
          alert('Oops, Usuário ou senha inválidos!!');
          console.log(error);
        },
      });
    }
  }
}
