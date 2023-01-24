import { PickerComponent } from './../../components/picker/picker.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from 'src/app/pages/pages.module';
import { ComponentModModule } from 'src/app/component-mod/component-mod.module';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    PagesModule,
  ],
  declarations: [
  ]
})

export class AdminLayoutModule {}
