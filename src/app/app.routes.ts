import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FoodbookingComponent } from './components/foodbooking/foodbooking.component';
import { TestComponent } from './components/test/test.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
  {
    path: '', 
    component: NavbarComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'home', component: HomeComponent },
      {path:'privacy',component:PrivacyPolicyComponent}

    ]
  },
  {path:'auth',component:AuthComponent},
  {path:'footer',component:FooterComponent},
   {path:'test',component: TestComponent},
  {path:'foodbooking',component:FoodbookingComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
 
];
