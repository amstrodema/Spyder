import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ArchiveModule } from './archive/archive.module';
import { RegisterModule } from '../component-mod/register/register.module';
import { SosCaseModule } from './overview/sos-case/sos-case.module';
import { AuthenticationCaseModule } from './free-zone/authentication-case/authentication-case.module';
import { PetitionCaseModule } from './overview/petition-case/petition-case.module';
import { RouterModule } from '@angular/router';
import { MarketCaseModule } from './free-zone/market-case/market-case.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { TrendingModule } from './overview/trending-case/trending.module';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ArchiveModule,
    RegisterModule,
    SosCaseModule,
    AuthenticationCaseModule,
    PetitionCaseModule,
    RouterModule,
    MarketCaseModule,
    HomeModule,
    ProfileModule,
    TrendingModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [PagesComponent, SettingsComponent, NotificationComponent],
})
export class PagesModule { }
