import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarriageCaseComponent } from './marriage-case.component';
import { MarriageModuleComponent } from './marriage-module/marriage-module.component';
import { NewMarriageRegisterComponent } from './new-marriage-register/new-marriage-register.component';
import { RegisterModule } from 'src/app/component-mod/register/register.module';
import { MarriageDetailsComponent } from './marriage-details/marriage-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RegisterModule,
    ComponentsModule,
    RouterModule,
    FormsModule
  ],
  declarations: [MarriageCaseComponent, MarriageModuleComponent, NewMarriageRegisterComponent, MarriageDetailsComponent]
})
export class MarriageCaseModule { }
