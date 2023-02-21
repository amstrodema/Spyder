// import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { CountdownModule, CountdownGlobalConfig } from 'node_modules/ngx-countdown';
import { CountdownConfig } from 'node_modules/ngx-countdown/interfaces';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MainInterceptorInterceptor } from './interceptors/main-interceptor.interceptor';
import { Title, BrowserModule } from '@angular/platform-browser';
import { Angular4PaystackModule } from 'angular4-paystack';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    AdminLayoutComponent
  ],
  providers: [
    Title,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: MainInterceptorInterceptor,
      multi:true,
    },
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
