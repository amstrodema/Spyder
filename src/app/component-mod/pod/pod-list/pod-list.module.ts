import { ConnectModule } from './../../connect/connect.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodListComponent } from './pod-list.component';

@NgModule({
  imports: [
    CommonModule,
    ConnectModule
  ],
  declarations: [PodListComponent],
  exports: [PodListComponent]
})
export class PodListModule { }
