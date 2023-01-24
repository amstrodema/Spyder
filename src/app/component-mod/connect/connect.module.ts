import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './connect.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConnectComponent],
  exports:[ConnectComponent]
})
export class ConnectModule { }
