import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StandingComponent } from './components/standing/standing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { ConstructorsComponent } from './components/constructors/constructors.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { MatCardModule } from '@angular/material/card';
import { ConstructorDetailsComponent } from './components/constructor-details/constructor-details.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { CompetitionDetailsComponent } from './components/competition-details/competition-details.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CompetitionCalendarComponent } from './components/competition-calendar/competition-calendar.component';
import { F1NewsComponent } from './components/f1-news/f1-news.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { SquadComponent } from './components/squad/squad.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserStandingComponent } from './components/user-standing/user-standing.component';
import { TokenInterceptorInterceptor } from './interceptors/token-interceptor.interceptor';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    StandingComponent,
    ToolbarComponent,
    HomeComponent,
    ConstructorsComponent,
    DriverDetailsComponent,
    ConstructorDetailsComponent,
    CompetitionsComponent,
    CompetitionDetailsComponent,
    CompetitionCalendarComponent,
    F1NewsComponent,
    SquadComponent,
    SignupComponent,
    LoginComponent,
    UserStandingComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatBottomSheetModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
