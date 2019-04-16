import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule,MatToolbarModule,MatInputModule,MatMenuModule,MatButtonModule,MatExpansionModule,MatIconModule} from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
