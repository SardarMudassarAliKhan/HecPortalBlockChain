import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-degrees-rejected',
  templateUrl: './degrees-rejected.component.html',
  styleUrls: ['./degrees-rejected.component.css']
})
export class DegreesRejectedComponent implements OnInit {
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
