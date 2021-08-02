import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.css']
})
export class SearchDocumentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
      this.router.navigate(['DocumentViewer']);
  }

}
