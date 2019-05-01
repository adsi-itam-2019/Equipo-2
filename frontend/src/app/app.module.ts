import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CatalogComponent } from './components/catalog/catalog.component';

// Specify the routing of the App
const routes: Route[] = [
  {path: '', component: RegistrationComponent},
  {path: 'catalog', component: CatalogComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
