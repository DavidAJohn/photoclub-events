import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  apiUrl = environment.apiUri;

  constructor(private http: HttpClient) {  }

  findEventBySlug(slug: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/events?slug=${slug}`);
  }

  findAllEvents(): Observable<Event[]> {
      return this.http.get(this.apiUrl + '/events')
          .pipe(
            map((events: Event[]) => {
              return events;
            })
          )
  }
}
