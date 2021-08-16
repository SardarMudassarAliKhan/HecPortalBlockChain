import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-university-dash-board',
  templateUrl: './university-dash-board.component.html',
  styleUrls: ['./university-dash-board.component.css']
})
export class UniversityDashBoardComponent implements OnInit {

  userData : any
  baseUrl: any = 'http://localhost:6060/students/'


  constructor(
    private router: ActivatedRoute,
    private API: APIService) { }

  ngOnInit(): void {
    let url = this.baseUrl+this.router.snapshot.params.id
    this.getDBData(url)
  }

  async getDBData(url:any){
    this.userData = await this.API.apiGetDBData(url)
    // console.log(this.userData)

  }

}
