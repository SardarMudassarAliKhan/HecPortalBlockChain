import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-home',
  templateUrl: './university-home.component.html',
  styleUrls: ['./university-home.component.css']
})
export class UniversityHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  newStudents() {
    this.router.navigate(['UniversityNewStudents']);

  }

  updatedStudents() {
    this.router.navigate(['UniversityUpdatedStudents']);

  }

  inProcessStudents() {
    this.router.navigate(['UniversityInprocessStudents']);

  }
  
  verifiedStudents() {
    this.router.navigate(['UniversityVerifiesStudents']);

  }

  allStudents() {
    this.router.navigate(['UniversityAllStudents']);

  }
}
