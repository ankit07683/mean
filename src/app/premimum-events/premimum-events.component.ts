import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premimum-events',
  templateUrl: './premimum-events.component.html',
  styleUrls: ['./premimum-events.component.css']
})
export class PremimuEventsComponent implements OnInit {

  all_events = {};
  constructor(
    private events:EventService,
    private router: Router) { }

  ngOnInit() {  
    this.events.specialEvents().subscribe(
      data => this.all_events = data.events,
      error => this.errorHandler(error)
    )
  }

  errorHandler(error){
    console.log(error);
    this.router.navigate(['/login']);
  }

}
