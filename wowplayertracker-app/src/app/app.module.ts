import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import {HttpClientModule} from '@angular/common/http';


import { PlayerModule } from './player/player.module';

const routes: Routes = [ 
  {path:'', redirectTo:'players', pathMatch:'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, 
    PlayerModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
