import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogueCaseComponent } from './dialogue-case.component';
import { NewDialogueComponent } from './new-dialogue/new-dialogue.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogueDetailsComponent } from './dialogue-details/dialogue-details.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [DialogueCaseComponent, NewDialogueComponent, DialogueDetailsComponent],
  exports: [DialogueCaseComponent, NewDialogueComponent, DialogueDetailsComponent]
})
export class DialogueCaseModule { }
