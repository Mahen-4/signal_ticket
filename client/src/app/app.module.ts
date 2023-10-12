import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { CreateACCComponent } from './components/create-acc/create-acc.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AddSignalComponent } from './components/add-signal/add-signal.component';
import { SignalComponent } from './components/signal/signal.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createACC', component: CreateACCComponent},
  {path: 'addSignal', component: AddSignalComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CreateACCComponent,
    LoginComponent,
    HomePageComponent,
    SideBarComponent,
    AddSignalComponent,
    SignalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
    FontAwesomeModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
