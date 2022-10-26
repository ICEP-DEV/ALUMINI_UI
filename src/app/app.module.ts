import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';
import { AboutComponent } from './components/about/about.component';
import { ViewnewsComponent } from './components/viewnews/viewnews.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
  
    
    SidenavComponent,
    NewsComponent,
    EventsComponent,
    AboutComponent,
    ViewnewsComponent,
    FooterComponent,
    routingComponents,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MdbFormsModule,
    MdbCarouselModule,
    MdbValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
