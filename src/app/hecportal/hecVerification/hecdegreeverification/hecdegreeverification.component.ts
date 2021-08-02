import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hecdegreeverification',
  templateUrl: './hecdegreeverification.component.html',
  styleUrls: ['./hecdegreeverification.component.css']
})
export class HecdegreeverificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Inprogress()
  {
    this.router.navigate(['DegreeInProcess']);
  }
  Inpending()
  {
    this.router.navigate(['DegreesInPending']);
  }
  Verified()
  {
    this.router.navigate(['DegreesVerified']);
  }
  Rejected()
  {
    this.router.navigate(['DegreesRejectedComponent']);
  }
}
