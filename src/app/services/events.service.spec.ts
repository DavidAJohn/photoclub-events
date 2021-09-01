import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { EVENTS } from '../../../test-events';
import { EventsService } from './events.service';

describe('EventsService', () => {
  let service: EventsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(EventsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all events', () => {

    service.getAllEvents()
      .subscribe((events: any) => {
        expect(events).toBeTruthy('No events returned');

        expect(events.length).toBe(2, "Incorrect number of events");

        const event = events.find(event => event.id === 1);
        expect(event.name).toBe("Macro Insect Photography Workshop with Les Attridge");
      });

      const request = httpTestingController.expectOne(`${environment.apiUri}/events`);
      expect(request.request.method).toBe("GET");
      expect(request.cancelled).toBeFalsy();
      expect(request.request.responseType).toEqual('json');

      request.flush({events: Object.values(EVENTS)});
  });

  it('should retrieve an event by slug', () => {

    service.getEventBySlug("severn-bridge-at-sunset-workshop")
        .subscribe((event: any) => {
            expect(event).toBeTruthy();
            expect(event.id).toBe(2);
        });

      const request = httpTestingController.expectOne(`${environment.apiUri}/events?slug=severn-bridge-at-sunset-workshop`);
      expect(request.request.method).toEqual("GET");

      request.flush(EVENTS[2]);
  });

});
