import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventSlug: string;
  event$: Observable<Event>;

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventSlug = this.route.snapshot.paramMap.get('slug');
    this.showEventDetails();
  }

  showEventDetails(): void {
    this.event$ = this.eventsService.getEventBySlug(this.eventSlug);
  }

}
