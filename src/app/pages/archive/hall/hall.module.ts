import { RouterModule } from '@angular/router';
import { ComponentModModule } from './../../../component-mod/component-mod.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallComponent } from './hall.component';
import { HallDetailsComponent } from './hall-details/hall-details.component';
import { AddHallComponent } from './add-hall/add-hall.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    ComponentModModule,
    FormsModule
  ],
  declarations: [HallComponent, HallDetailsComponent, AddHallComponent]
})
export class HallModule { }
