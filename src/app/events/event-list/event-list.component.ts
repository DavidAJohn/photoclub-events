import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void {
    this.events$ = this.eventsService.getAllEvents();
  }

  createNewEvent(): void {
    this.eventsService.createNewEvent();
  }
}
