import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AssetsComponent } from './components/assets/assets.component';

import {ValidateService} from "./services/validate.service";
import {AuthService} from "./services/auth.service";
import {AssetsService} from "./services/assets.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthGuard} from "./guards/auth.guard";
import {LoggedInGuard} from "./guards/logged-in.guard";


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent, canActivate:[LoggedInGuard]},
  {path:'login', component: LoginComponent, canActivate:[LoggedInGuard]},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'assets', component: AssetsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AssetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AssetsService, AuthGuard, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
