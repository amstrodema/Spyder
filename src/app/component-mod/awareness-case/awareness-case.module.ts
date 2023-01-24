import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwarenessCaseComponent } from './awareness-case.component';
import { RouterModule } from '@angular/router';
import { NewAwarenessComponent } from './new-awareness/new-awareness.component';
import { FormsModule } from '@angular/forms';
import { AwarenessDetailsComponent } from './awareness-details/awareness-details.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [AwarenessCaseComponent, NewAwarenessComponent, AwarenessDetailsComponent],
  exports: [AwarenessCaseComponent, NewAwarenessComponent, AwarenessDetailsComponent]
})
export class AwarenessCaseModule { }
