import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodComponent } from './pod.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PodComponent],
  exports: [PodComponent]
})
export class PodModule { }
