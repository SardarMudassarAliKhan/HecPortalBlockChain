import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.css']
})
export class SearchDocumentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  getData(val:any) {

    // use id to get data here!!!
    // pass the returned data to the document viewer component

      this.router.navigate(['DocumentViewer/'+val.cnic]);
  }

}
