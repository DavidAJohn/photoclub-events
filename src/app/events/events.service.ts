import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { SlugifyPipe } from '../helpers/slugify.pipe';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  apiUrl = environment.apiUri;

  constructor(private http: HttpClient, private slugifyPipe: SlugifyPipe) {  }

  getEventBySlug(slug: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/events?slug=${slug}`)
      .pipe(
        map((event: Event) => {
          return event;
        })
      )
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get(this.apiUrl + '/events?_sort=date:ASC&_limit=3')
        .pipe(
          map((events: Event[]) => {
            return events;
          })
        )
  }

  createNewEvent(): void {
    const title = "Test Title";
    const slug = this.slugifyPipe.transform(title);

    console.log(slug);
  }
}
