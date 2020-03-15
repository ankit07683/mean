import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  private eventURI = 'https://ak-mean.herokuapp.com/api/events';
  private specialEventsURI = 'https://ak-mean.herokuapp.com/api/special_events';
  events(){
    return this.http.get<any>(this.eventURI);
  }

  specialEvents(){
    return this.http.get<any>(this.specialEventsURI);
  }
}
