import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { PictureComponent } from './pages/picture/picture.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'picture', component: PictureComponent },
  // { path: 'preview', component: HeroListComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
