import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolComponent } from './pool.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [PoolComponent]
})
export class PoolModule { }
