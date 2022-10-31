import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsingleComponent } from './components/aboutsingle/aboutsingle.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonateComponent } from './components/donate/donate.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminmanagersvpComponent } from './components/adminmanagersvp/adminmanagersvp.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutsingle', component: AboutsingleComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adminmanagersvp' , component: AdminmanagersvpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[HomeComponent, AboutsingleComponent, ContactComponent, RegisterComponent, DonateComponent, AdminmanagersvpComponent]
