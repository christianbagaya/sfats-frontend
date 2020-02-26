import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from "./services/auth.guard";
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: 'stafalty', canActivate: [AuthGuard], component: UserlistComponent},
  { path: '', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: "logout", component: LogoutComponent },
  { path: "schedule", component: ScheduleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
