import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  all_events = {};

  constructor(private events:EventService) { }
  
  ngOnInit() {
    this.events.events().subscribe(
      data => this.all_events = data.events,
      error => this.errorHandler(error)
    )
  }

  errorHandler(error){
    console.log(error)
  }

}
