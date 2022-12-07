import { MessageModule } from '../components/message/message.module';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    ReactiveFormsModule,
    HomeRoutingModule,
    MessageModule,
    CommonModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
