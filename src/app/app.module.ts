import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubPageComponent } from './hub-page/hub-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BsModalService } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    HubPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
