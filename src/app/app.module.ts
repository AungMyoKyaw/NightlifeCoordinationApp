import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { SearchyelpService } from './searchyelp.service';

import { AppComponent } from './app.component';
import { SearchyelpComponent } from './searchyelp/searchyelp.component';

const appRoutes:Routes=[
  {path:'dashboard',component:SearchyelpComponent},

  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchyelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchyelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
