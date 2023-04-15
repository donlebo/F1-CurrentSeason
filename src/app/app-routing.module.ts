import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionDetailsComponent } from './components/competition-details/competition-details.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { ConstructorDetailsComponent } from './components/constructor-details/constructor-details.component';
import { ConstructorsComponent } from './components/constructors/constructors.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { F1NewsComponent } from './components/f1-news/f1-news.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SquadComponent } from './components/squad/squad.component';
import { StandingComponent } from './components/standing/standing.component';
import { UserStandingComponent } from './components/user-standing/user-standing.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/standing/driver', component: StandingComponent },
  { path: 'home/standing/constructor', component: ConstructorsComponent },
  { path: 'driverDetails/:driverId', component: DriverDetailsComponent },
  { path: 'constructorDetails/:constructorId', component: ConstructorDetailsComponent },
  { path: 'home/competitions', component: CompetitionsComponent },
  { path: 'competitions/:id', component: CompetitionDetailsComponent },
  { path: 'f1-news', component: F1NewsComponent },
  { path: 'welcome-to-f1/home', component: HomeComponent },
  { path: 'home/teams', component: SquadComponent },
  { path: 'home/teamsStanding', component: UserStandingComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
