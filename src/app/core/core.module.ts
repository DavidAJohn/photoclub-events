import { EventsModule } from './../events/events.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    EventsModule,
    CoreRoutingModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
