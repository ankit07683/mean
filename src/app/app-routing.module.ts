import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { PremimuEventsComponent } from './premimum-events/premimum-events.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent,
    pathMatch: 'full'
  },
  {
    path: 'premium-events',
    component: PremimuEventsComponent,
    pathMatch: 'full',
    canActivate : [AuthGuard]
  },
  {
    path: 'event/:id',
    component: EventDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-project',
    component: AboutUsComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'my-events',
    component: MyEventsComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-event',
    component: CreateEventComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'edit-event/:id',
    component: EditEventComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  RegisterComponent, 
  LoginComponent, 
  EventsComponent, 
  PremimuEventsComponent, 
  HomeComponent, 
  AboutUsComponent, 
  MyProfileComponent,
  MyEventsComponent, 
  CreateEventComponent, 
  EditEventComponent,
  EventDetailsComponent
];
