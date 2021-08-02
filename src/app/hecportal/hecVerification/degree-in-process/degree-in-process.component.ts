import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-degree-in-process',
  templateUrl: './degree-in-process.component.html',
  styleUrls: ['./degree-in-process.component.css']
})
export class DegreeInProcessComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts={};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
    });
  }
  

}
