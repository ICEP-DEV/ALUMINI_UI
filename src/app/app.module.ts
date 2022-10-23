import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/partials/search/search.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FindalumniComponent } from './components/pages/findalumni/findalumni.component';
import { CareerComponent } from './components/pages/career/career.component';
import { ChatsComponent } from './components/pages/chats/chats.component';
import { NewsComponent } from './components/pages/news/news.component';
import { LoginComponent } from './components/pages/admin_only/login/login.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NavComponent } from './components/partials/nav/nav.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventPageComponent } from './components/pages/event-page/event-page.component';
import { ViewprofileComponent } from './components/pages/viewprofile/viewprofile.component';
import { SearchVacanciesComponent } from './components/partials/search-vacancies/search-vacancies.component';
// import { DialogComponent } from './components/partials/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    FindalumniComponent,
    CareerComponent,
    ChatsComponent,
    NewsComponent,
    LoginComponent,
    FooterComponent,
    NavComponent,
    GalleryComponent,
    EventsComponent,
    EventPageComponent,
    ViewprofileComponent,
    SearchVacanciesComponent,
    // DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // MatDialogModule
    // ToastrModule.forRoot({
    //   timeOut:3000,
    //   positionClass:'toast-bottom-right',
    //   newestOnTop:false
    // }),
    // BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
