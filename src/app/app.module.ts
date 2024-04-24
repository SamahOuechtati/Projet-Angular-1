import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { DetailsCandidatComponent } from './details-candidat/details-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ListUtilsateurComponent } from './list-utilsateur/list-utilsateur.component';
import { VerifPaswwordComponent } from './verif-paswword/verif-paswword.component';
import { EditUtilComponent } from './edit-util/edit-util.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListCandidatComponent,
    AddCandidatComponent,
    DetailsCandidatComponent,
    EditCandidatComponent,
    NotFoundComponent,
    NavComponent,
    LoginComponent,
    ListUtilsateurComponent,
    VerifPaswwordComponent,
    EditUtilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
