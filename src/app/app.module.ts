import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Login1Component } from './login1/login1.component';

const routes = [
  {path:'',redirectTo:'login1',pathMatch: 'full'},
  {path:'login1',component:Login1Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Login1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
