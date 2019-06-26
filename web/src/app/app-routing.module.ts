import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContractsComponent } from './pages/contracts/contracts.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contracts', component: ContractsComponent },
  // { path: 'picture', component: HeroListComponent },
  // { path: 'preview', component: HeroListComponent },
  // { path: 'checkout', component: HeroListComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
