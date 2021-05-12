import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { BodyComponent } from './components/body/body.component';
import { PockemonEditComponent } from './components/pockemon-edit/pockemon-edit.component';
import { PockemonCardComponent } from './components/pockemon-card/pockemon-card.component';
import { WhoIamComponent } from './components/who-iam/who-iam.component';
import { HttpClientModule } from '@angular/common/http';
import { ContadorUnoComponent } from './components/pockemon-card/contador-uno/contador-uno.component';
import { ContadorDosComponent } from './components/pockemon-card/contador-dos/contador-dos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BodyComponent,
    PockemonEditComponent,
    PockemonCardComponent,
    WhoIamComponent,
    ContadorUnoComponent,
    ContadorDosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
