import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'stafalty', component: UserlistComponent},
  { path: 'home', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
