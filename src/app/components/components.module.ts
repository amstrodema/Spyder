import { AdsModule } from './ads/ads.module';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsRegisterComponent } from './details-register/details-register.component';
import { HallModelComponent } from './hall-model/hall-model.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsFeedComponent } from './details-feed/details-feed.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { PickerComponent } from './picker/picker.component';
// import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { SettingComponent } from './market-place/setting/setting.component';
import { Spinner2Component } from './spinner/spinner2/spinner2.component';
import { Spinner3Component } from './spinner/spinner3/spinner3.component';
import { SearchViewComponent } from './navbar/search-view/search-view.component';
import { BannerGenComponent } from './banner-gen/banner-gen.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HallModelComponent,
    DetailsRegisterComponent,
    CommentBoxComponent,
    DetailsFeedComponent,
    PickerComponent,
    GalleryComponent,
    SpinnerComponent,
    SettingComponent,
    Spinner2Component,
    Spinner3Component,
    SearchViewComponent,
    BannerGenComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HallModelComponent,
    DetailsRegisterComponent,
    CommentBoxComponent,
    DetailsFeedComponent,
    PickerComponent,
    GalleryComponent,
    SpinnerComponent,
    SettingComponent,
    Spinner2Component,
    Spinner3Component,
    BannerGenComponent
  ]
})
export class ComponentsModule { }
