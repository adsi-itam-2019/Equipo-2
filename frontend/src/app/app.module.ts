import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccommodationListComponent } from './components/accommodation-list/accommodation-list.component';
import { HousesComponent } from './components/houses/houses.component';

import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// Specify the routing of the App
const routes: Route[] = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'catalog', component: CatalogComponent},
  { path: 'house', component: HousesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    RegisterComponent,
    LoginComponent,
    AccommodationListComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
