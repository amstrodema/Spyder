import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhistleCaseComponent } from './whistle-case.component';
import { NewWhistleComponent } from './new-whistle/new-whistle.component';
import { WhistleDetailsComponent } from './whistle-details/whistle-details.component';
import { WhistleComponent } from './whistle/whistle.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogueCaseModule } from 'src/app/component-mod/dialogue-case/dialogue-case.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    DialogueCaseModule
  ],
  declarations: [WhistleCaseComponent, NewWhistleComponent, WhistleDetailsComponent, WhistleComponent]
})
export class WhistleCaseModule { }
