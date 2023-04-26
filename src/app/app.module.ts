import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HtwComponent } from './htw/htw.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { HostsComponent } from './hosts/hosts.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HostComponent } from './host/host.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegComponent },
  { path: 'host', component: HostComponent },
  { path: 'hosts', component: HostsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'htw', component: HtwComponent },
  { path: 'contactus', component: ContactusComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtwComponent,
    LoginComponent,
    RegComponent,
    HostsComponent,
    ContactusComponent,
    HostComponent
  ],
  imports: [
    BrowserModule, RxReactiveFormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes), NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
