import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/pages/free-zone/authentication-case/login/login.component';
import { RegisterModule } from 'src/app/component-mod/register/register.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RegisterComponent } from 'src/app/pages/free-zone/authentication-case/register/register.component';
import { ForgotPasswordComponent } from 'src/app/pages/free-zone/authentication-case/forgot-password/forgot-password.component';

export const HomeLayoutRoutes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'login',       component: LoginComponent },
  { path: 'register',       component: RegisterComponent },
  { path: 'register/:id',       component: RegisterComponent },
  { path: 'forgot-password',       component: ForgotPasswordComponent },
];
