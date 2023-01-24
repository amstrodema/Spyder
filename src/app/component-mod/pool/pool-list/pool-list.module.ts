import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolListComponent } from './pool-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PoolListComponent],
  exports: [PoolListComponent]
})
export class PoolListModule { }
