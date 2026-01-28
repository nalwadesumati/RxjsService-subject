import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TodosComponent } from './component/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { ɵEmptyOutletComponent, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { OneComponent } from './component/one/one.component';
import { TwoComponent } from './component/two/two.component';
import { ThreeComponent } from './component/three/three.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    TodosComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ɵEmptyOutletComponent,
    RouterOutlet,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
