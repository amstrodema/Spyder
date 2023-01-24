import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar.component';
import { RegisterModule } from 'src/app/component-mod/register/register.module';
import { MarriageCaseModule } from './marriage-case/marriage-case.module';
import { DeathCaseModule } from './death-case/death-case.module';

@NgModule({
  imports: [
    CommonModule,
    MarriageCaseModule,
    DeathCaseModule
  ],
  declarations: [RegistrarComponent],
  exports: []
})
export class RegistrarModule { }
