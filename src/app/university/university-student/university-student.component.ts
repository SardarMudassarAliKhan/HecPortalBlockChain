import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-university-student',
  templateUrl: './university-student.component.html',
  styleUrls: ['./university-student.component.css']
})


export class UniversityStudentComponent implements OnInit {

  @Input() userData:any;


  constructor() { }

  ngOnInit(): void {

  }

}
