import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolGridComponent } from './pool-grid.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PoolGridComponent],
  exports: [PoolGridComponent]
})
export class PoolGridModule { }
