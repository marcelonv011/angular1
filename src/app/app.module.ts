import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { IndexComponent } from './app/layout/index/index.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PessoaslistComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    CarroslistComponent,
    LivroslistComponent,
    PessoasdetailsComponent,
    LivrosdetailsComponent,
    CarrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
