import { ComponentsModule } from 'src/app/components/components.module';
import { GridDisplayComponent } from './grid-display/grid-display.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModComponent } from './component-mod.component';
import { ConnectModule } from './connect/connect.module';
import { PodModule } from './pod/pod.module';
import { RegisterModule } from './register/register.module';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ConnectModule,
    PodModule,
    NgbModule
  ],
  declarations: [ComponentModComponent, GridDisplayComponent],
  exports: [GridDisplayComponent]
})
export class ComponentModModule { }
