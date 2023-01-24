import { PoolModule } from './pool/pool.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from './archive.component';
import { HallModule } from './hall/hall.module';
import { RegistrarModule } from './registrar/registrar.module';
import { WhispersModule } from './whispers/whispers.module';

@NgModule({
  imports: [
    CommonModule,
    HallModule,
    RegistrarModule,
    PoolModule,
    WhispersModule
  ],
  declarations: [ArchiveComponent],
  exports:[]
})
export class ArchiveModule { }
