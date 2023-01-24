import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { DeathListCompComponent } from './death-list-comp/death-list-comp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MarriageListCompComponent } from './marriage-list-comp/marriage-list-comp.component';
import { DeathGridCompComponent } from './death-grid-comp/death-grid-comp.component';
import { MarriageGridCompComponent } from './marriage-grid-comp/marriage-grid-comp.component';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [RegisterComponent,DeathGridCompComponent, DeathListCompComponent, MarriageListCompComponent,
  MarriageGridCompComponent],
  exports:[RegisterComponent, MarriageListCompComponent, DeathGridCompComponent, DeathListCompComponent, MarriageGridCompComponent]
})
export class RegisterModule { }
