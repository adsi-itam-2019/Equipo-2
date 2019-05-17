import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Route } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccommodationListComponent } from './components/accommodation-list/accommodation-list.component';
import { HousesComponent } from './components/houses/houses.component';

import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OwnerCatalogComponent } from './components/owner-catalog/owner-catalog.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
// Specify the routing of the App
const routes: Route[] = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'catalog', component: CatalogComponent},
  { path: 'house', component: HousesComponent},
  { path: 'ownercatalog', component: OwnerCatalogComponent},
  {path: 'mailbox',component:MailboxComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    RegisterComponent,
    LoginComponent,
    AccommodationListComponent,
    HousesComponent,
    OwnerCatalogComponent,
    MailboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
