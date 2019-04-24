import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserListComponent } from './user-list/user-list.component'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path: 'signup', component:SignupPageComponent},
  {path: 'profile', component:ProfilePageComponent},
  { path: 'users/:userId/:username', component: UserDetailComponent },
  { path: '', component: UserListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
