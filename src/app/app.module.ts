import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoot: Routes = [
  {path: 'contents', component: ContentsComponent},
  {path: '', redirectTo: '/contents', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'movieDetails/:id', component: MovieDetailsComponent},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentsComponent,
    ContactsComponent,
    NotFoundComponent,
    NavbarComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
