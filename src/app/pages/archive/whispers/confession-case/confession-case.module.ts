import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfessionCaseComponent } from './confession-case.component';
import { ConfessionComponent } from './confession/confession.component';
import { NewConfessionComponent } from './new-confession/new-confession.component';
import { ConfessionDetailsComponent } from './confession-details/confession-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogueCaseModule } from 'src/app/component-mod/dialogue-case/dialogue-case.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DialogueCaseModule,
    ComponentsModule
  ],
  declarations: [ConfessionCaseComponent, ConfessionComponent, NewConfessionComponent, ConfessionDetailsComponent]
})
export class ConfessionCaseModule { }
