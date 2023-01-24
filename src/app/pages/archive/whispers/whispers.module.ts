import { FoundCaseModule } from './found-case/found-case.module';
import { ConfessionCaseModule } from './confession-case/confession-case.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhispersComponent } from './whispers.component';
import { StolenComponent } from './stolen-case/stolen/stolen.component';
import { StolenCaseModule } from './stolen-case/stolen-case.module';
import { MissingCaseModule } from './missing-case/missing-case.module';
import { WantedCaseModule } from './wanted-case/wanted-case.module';
import { WhistleCaseModule } from './whistle-case/whistle-case.module';
import { ScammerCaseModule } from './scammer-case/scammer-case.module';

@NgModule({
  imports: [
    CommonModule,
    StolenCaseModule,
    RouterModule,
    ConfessionCaseModule,
    MissingCaseModule,
    WantedCaseModule,
    WhistleCaseModule,
    ScammerCaseModule,
    FoundCaseModule
  ],
  declarations: [WhispersComponent]
})
export class WhispersModule { }
