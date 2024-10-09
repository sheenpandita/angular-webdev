import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }, // Redirect to user by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
