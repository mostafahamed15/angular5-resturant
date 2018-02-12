import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepiesListComponent } from './recepies/recepies-list/recepies-list.component';
import { RecepiesDetailsComponent } from './recepies/recepies-details/recepies-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecepiesItemComponent } from './recepies/recepies-list/recepies-item/recepies-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    RecepiesComponent,
    RecepiesListComponent,
    RecepiesDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecepiesItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
