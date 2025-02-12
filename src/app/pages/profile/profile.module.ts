import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { BioComponent } from './bio/bio.component';
import { PetitionVoteComponent } from './petition/petition-vote/petition-vote.component';
import { PetitionCommentComponent } from './petition/petition-comment/petition-comment.component';
import { PersonalPetitionComponent } from './petition/personal-petition/personal-petition.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [ProfileComponent, BioComponent, PetitionVoteComponent, PetitionCommentComponent, PersonalPetitionComponent]
})
export class ProfileModule { }
