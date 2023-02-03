import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenComponentComponent } from './men-component/men-component.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
// import { MyserviceService } from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MenComponentComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpHeaders,
    // MyserviceService,
    routes,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent },
      {path: 'men', component: MenComponentComponent },
      {path: 'register', component: RegisterComponent }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {

 }
