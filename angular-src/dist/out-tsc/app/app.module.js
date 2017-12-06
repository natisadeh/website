var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AssetsComponent } from './components/assets/assets.component';
import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { AssetsService } from "./services/assets.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { AuthGuard } from "./guards/auth.guard";
import { LoggedInGuard } from "./guards/logged-in.guard";
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard] },
    { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'assets', component: AssetsComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=F:/webStormProjects/meanauthapp/angular-src/src/app/app.module.js.map