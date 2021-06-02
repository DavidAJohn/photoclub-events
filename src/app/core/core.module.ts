import { EventsModule } from './../events/events.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    EventsModule,
    NgbModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
