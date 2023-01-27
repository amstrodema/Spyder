import { FoundDetailsComponent } from './../../pages/archive/whispers/found-case/found-details/found-details.component';
import { RegistrarComponent } from './../../pages/archive/registrar/registrar.component';
import { HallComponent } from './../../pages/archive/hall/hall.component';
import { TraceComponent } from './../../pages/discovery/trace/trace.component';
import { ConnectComponent } from './../../pages/discovery/connect/connect.component';
import { RankComponent } from './../../pages/free-zone/rank/rank.component';
import { PoolComponent } from './../../pages/archive/pool/pool.component';
import { Routes } from '@angular/router';
import { HistoryComponent } from 'src/app/pages/discovery/history/history.component';
import { StolenComponent } from 'src/app/pages/archive/whispers/stolen-case/stolen/stolen.component';
import { NewStolenComponent } from 'src/app/pages/archive/whispers/stolen-case/new-stolen/new-stolen.component';
import { StolenDetailsComponent } from 'src/app/pages/archive/whispers/stolen-case/stolen-details/stolen-details.component';
import { WantedComponent } from 'src/app/pages/archive/whispers/wanted-case/wanted/wanted.component';
import { WhistleComponent } from 'src/app/pages/archive/whispers/whistle-case/whistle/whistle.component';
import { ConfessionComponent } from 'src/app/pages/archive/whispers/confession-case/confession/confession.component';
import { MissingComponent } from 'src/app/pages/archive/whispers/missing-case/missing/missing.component';
import { ConfessionDetailsComponent } from 'src/app/pages/archive/whispers/confession-case/confession-details/confession-details.component';
import { NewConfessionComponent } from 'src/app/pages/archive/whispers/confession-case/new-confession/new-confession.component';
import { NewMissingComponent } from 'src/app/pages/archive/whispers/missing-case/new-missing/new-missing.component';
import { MissingDetailsComponent } from 'src/app/pages/archive/whispers/missing-case/missing-details/missing-details.component';
import { WhistleDetailsComponent } from 'src/app/pages/archive/whispers/whistle-case/whistle-details/whistle-details.component';
import { NewWhistleComponent } from 'src/app/pages/archive/whispers/whistle-case/new-whistle/new-whistle.component';
import { DeathRegisterComponent } from 'src/app/pages/archive/registrar/death-case/death-register/death-register.component';
import { MarriageModuleComponent } from 'src/app/pages/archive/registrar/marriage-case/marriage-module/marriage-module.component';
import { NewDeathRegisterComponent } from 'src/app/pages/archive/registrar/death-case/new-death-register/new-death-register.component';
import { NewMarriageRegisterComponent } from 'src/app/pages/archive/registrar/marriage-case/new-marriage-register/new-marriage-register.component';
import { MarriageDetailsComponent } from 'src/app/pages/archive/registrar/marriage-case/marriage-details/marriage-details.component';
import { DeathDetailsComponent } from 'src/app/pages/archive/registrar/death-case/death-details/death-details.component';
import { AddHallComponent } from 'src/app/pages/archive/hall/add-hall/add-hall.component';
import { HallDetailsComponent } from 'src/app/pages/archive/hall/hall-details/hall-details.component';
import { SosComponent } from 'src/app/pages/overview/sos-case/sos/sos.component';
import { NewSosComponent } from 'src/app/pages/overview/sos-case/new-sos/new-sos.component';
import { SosDetailsComponent } from 'src/app/pages/overview/sos-case/sos-details/sos-details.component';
import { ForgotPasswordComponent } from 'src/app/pages/free-zone/authentication-case/forgot-password/forgot-password.component';
import { RegisterComponent } from 'src/app/pages/free-zone/authentication-case/register/register.component';
import { LoginComponent } from 'src/app/pages/free-zone/authentication-case/login/login.component';
import { PetitionComponent } from 'src/app/pages/overview/petition-case/petition/petition.component';
import { PetitionViewComponent } from 'src/app/pages/overview/petition-case/petition-view/petition-view.component';
import { ScammerNewComponent } from 'src/app/pages/archive/whispers/scammer-case/scammer-new/scammer-new.component';
import { ScammerDetailsComponent } from 'src/app/pages/archive/whispers/scammer-case/scammer-details/scammer-details.component';
import { ScammerComponent } from 'src/app/pages/archive/whispers/scammer-case/scammer/scammer.component';
import { FoundCaseComponent } from 'src/app/pages/archive/whispers/found-case/found-case.component';
import { NewFoundComponent } from 'src/app/pages/archive/whispers/found-case/new-found/new-found.component';
import { MarketPlaceComponent } from 'src/app/pages/free-zone/market-case/market-place/market-place.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { TrendingComponent } from 'src/app/pages/overview/trending-case/trending.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { NotificationComponent } from 'src/app/pages/notification/notification.component';
import { WalletComponent } from 'src/app/pages/free-zone/wallet/wallet.component';

export const AdminLayoutRoutes: Routes = [
  { path: '',       component: TrendingComponent },
  { path: 'petitions',       component: PetitionComponent },
  { path: 'trending',       component: TrendingComponent },
  { path: 'pools',       component: PoolComponent },

  { path: 'hall-of-fame',       component: HallComponent },
  { path: 'hall-of-shame',       component: HallComponent },
  { path: 'hall-of-legends',       component: HallComponent },
  { path: 'hall-of-heros',       component: HallComponent },
  { path: 'hall-of-fallen-heros',       component: HallComponent },
  { path: 'hall-of-the-unforgotten',       component: HallComponent },

  { path: 'petition/new',       component: AddHallComponent },
  { path: 'petition/details/:id',       component: PetitionViewComponent },
  { path: 'hall/details/:id',       component: HallDetailsComponent },

  { path: 'marriage-register/edit/:id',       component: NewMarriageRegisterComponent },
  { path: 'marriage-register',       component: MarriageModuleComponent },
  { path: 'marriage-register/new',       component: NewMarriageRegisterComponent },
  { path: 'marriage-register/details/:id',       component: MarriageDetailsComponent },

  { path: 'death-register/edit/:id',       component: NewDeathRegisterComponent },
  { path: 'death-register',       component: DeathRegisterComponent },
  { path: 'death-register/new',       component: NewDeathRegisterComponent },
  { path: 'death-register/details/:id',       component: DeathDetailsComponent },

  { path: 'item-register',       component: RegistrarComponent },
  { path: 'wanted',       component: WantedComponent },
  { path: 'whistle-blowers',       component: WhistleComponent },
  { path: 'stolen',       component: StolenComponent },
  { path: 'confessions',       component: ConfessionComponent },
  { path: 'missing',       component: MissingComponent },
  { path: 'market-place',       component: MarketPlaceComponent },
  { path: 'rank',       component: RankComponent },
  { path: 'wallet',       component: WalletComponent },
  { path: 'connect',       component: ConnectComponent },
  { path: 'history',       component: HistoryComponent },
  { path: 'trace',       component: TraceComponent },
  { path: 'stolen/edit/:id',       component: NewStolenComponent },
  { path: 'stolen/new',       component: NewStolenComponent },
  { path: 'stolen/details/:id',       component: StolenDetailsComponent },
  { path: 'confession/edit/:id',       component: NewConfessionComponent },
  { path: 'confession/new',       component: NewConfessionComponent },
  { path: 'confession/details/:id',       component: ConfessionDetailsComponent },

  { path: 'missing/edit/:id',       component: NewMissingComponent },
  { path: 'missing/new',       component: NewMissingComponent },
  { path: 'missing/details/:id',       component: MissingDetailsComponent },

  { path: 'whistle-blower/edit/:id',       component: NewWhistleComponent },
  { path: 'whistle-blower/new',       component:  NewWhistleComponent },
  { path: 'whistle-blower/details/:id',       component: WhistleDetailsComponent },

  // { path: 'save-my-soul',       component: SosComponent },
  // { path: 'sos',       component: SosComponent },
  // { path: 'sos/new',       component:  NewSosComponent },
  // { path: 'sos/details/:id',       component: SosDetailsComponent },

  { path: 'scammer/edit/:id',       component: ScammerNewComponent },
  { path: 'scammer/new',       component:  ScammerNewComponent },
  { path: 'scammer/details/:id',       component: ScammerDetailsComponent },
  { path: 'scammers',       component: ScammerComponent },

  { path: 'found/edit/:id',       component: NewFoundComponent },
  { path: 'found/new',       component:  NewFoundComponent },
  { path: 'found/details/:id',       component: FoundDetailsComponent },
  { path: 'found',       component: FoundCaseComponent },

  { path: 'settings',       component: SettingsComponent },
  { path: 'profile/:id',       component: ProfileComponent },
  { path: 'profile',       component: ProfileComponent },
  { path: 'notifications',       component: NotificationComponent }
 ];
