import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationCaseComponent } from './authentication-case.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [AuthenticationCaseComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent]
})
export class AuthenticationCaseModule { }
