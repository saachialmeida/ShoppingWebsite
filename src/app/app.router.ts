import { ModuleWithProviders } from '@angular/core';
//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MenComponentComponent } from './men-component/men-component.component';
import { RegisterComponent } from './register/register.component';



//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.
// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
   // to this object, but we are redirecting this path to items path using redirectTo key.

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home ', component: HomeComponent},
    { path: 'men ', component: MenComponentComponent},
    { path: 'register ', component: RegisterComponent}

  
];

//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)
//export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App fo

export const routes = RouterModule.forRoot(router);