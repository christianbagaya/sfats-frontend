import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserItemComponent,
    ProfileComponent,
    ProfileItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
