import { EventsRoutingModule } from './events-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [
    EventComponent,
    EventListComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  exports: [
    EventComponent,
    EventListComponent
  ]
})
export class EventsModule { }
