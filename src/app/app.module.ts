import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApicallsService } from './services/apicalls.service';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { ViewuserphotosComponent } from './components/viewuserphotos/viewuserphotos.component';
// import { HeaderComponent } from './components/header/header.component';
// import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewusersComponent,
    ViewuserphotosComponent,
    // HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ApicallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
