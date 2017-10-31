// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

// Route Configuration
export const routes: Routes = [
{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
},
{
    path: 'login',
    component: LoginComponent


},
{
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
}
  // Add dog routes form a different file
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
