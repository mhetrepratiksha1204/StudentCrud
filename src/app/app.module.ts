import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import {StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
    

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
