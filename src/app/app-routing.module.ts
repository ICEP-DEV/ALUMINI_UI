import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/pages/admin_only/login/login.component';
import { CareerComponent } from './components/pages/career/career.component';
import { ChatsComponent } from './components/pages/chats/chats.component';
import { EventPageComponent } from './components/pages/event-page/event-page.component';
import { EventsComponent } from './components/pages/events/events.component';
import { FindalumniComponent } from './components/pages/findalumni/findalumni.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { NewsComponent } from './components/pages/news/news.component';
import { ViewprofileComponent } from './components/pages/viewprofile/viewprofile.component';
import { SearchVacanciesComponent } from './components/partials/search-vacancies/search-vacancies.component';

const routes: Routes = [
{path:'',component:FindalumniComponent},

//partials
{path:'search/:searchTerm',component:FindalumniComponent},
{path:'career/searchFaculty/:searchTerm',component:CareerComponent},

//everyone
{path:'career',component:CareerComponent},
{path:'chat',component:ChatsComponent},
{path:'newspage',component:NewsComponent},
{path:'event-page',component:EventPageComponent},
{path:'gallery',component:GalleryComponent},
{path:'events',component:EventsComponent},
{path:'profile',component:ViewprofileComponent},


//admin
{path:'a_login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
