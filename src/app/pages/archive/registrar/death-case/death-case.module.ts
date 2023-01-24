import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeathCaseComponent } from './death-case.component';
import { DeathRegisterComponent } from './death-register/death-register.component';
import { NewDeathRegisterComponent } from './new-death-register/new-death-register.component';
import { RegisterModule } from 'src/app/component-mod/register/register.module';
import { DeathDetailsComponent } from './death-details/death-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RegisterModule,
    ComponentsModule,RouterModule,
    FormsModule
  ],
  declarations: [DeathCaseComponent, DeathRegisterComponent, NewDeathRegisterComponent, DeathDetailsComponent]
})
export class DeathCaseModule { }
