import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ContactComponent } from './application/contact/contact.component';
import { ErrorComponent } from './application/error/error.component';
import { MenuComponent } from './application/menu/menu.component';
import { ProduitComponent } from './application/produit/produit.component';
import { ProduitsComponent } from './application/produits/produits.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    ErrorComponent,
    MenuComponent,
    ProduitComponent,
    ProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
