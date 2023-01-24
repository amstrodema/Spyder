import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SosCaseComponent } from './sos-case.component';
import { SosComponent } from './sos/sos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewSosComponent } from './new-sos/new-sos.component';
import { SosDetailsComponent } from './sos-details/sos-details.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [SosCaseComponent,SosComponent, NewSosComponent, SosDetailsComponent]
})
export class SosCaseModule { }
