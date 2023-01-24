import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScammerCaseComponent } from './scammer-case.component';
import { ScammerComponent } from './scammer/scammer.component';
import { ScammerNewComponent } from './scammer-new/scammer-new.component';
import { ScammerDetailsComponent } from './scammer-details/scammer-details.component';
import { RouterModule } from '@angular/router';
import { DialogueCaseModule } from 'src/app/component-mod/dialogue-case/dialogue-case.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DialogueCaseModule
  ],
  declarations: [ScammerCaseComponent, ScammerComponent, ScammerNewComponent, ScammerDetailsComponent]
})
export class ScammerCaseModule { }
