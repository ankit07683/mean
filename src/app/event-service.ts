import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  private eventURI = 'http://localhost:3000/api/events';
  private specialEventsURI = 'http://localhost:3000/api/special_events';
  events(){
    return this.http.get<any>(this.eventURI);
  }

  specialEvents(){
    return this.http.get<any>(this.specialEventsURI);
  }
}
