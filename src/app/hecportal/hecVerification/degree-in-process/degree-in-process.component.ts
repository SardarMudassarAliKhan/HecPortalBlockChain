import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from 'src/app/api.service';
@Component({
  selector: 'app-degree-in-process',
  templateUrl: './degree-in-process.component.html',
  styleUrls: ['./degree-in-process.component.css']
})
export class DegreeInProcessComponent implements OnInit {
  constructor(private API: APIService) { }

  data: any
  userData: any = []
  baseUrl: any = 'http://localhost:6060/students/'

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    let url = this.baseUrl
    // console.log(url, val)
    // need to call api and get data return it to the html page
    await this.API.apiGetDBData(url).then(res => { (this.data = res); })

    for (var data of this.data) {
      if (data.to_verify && data.status!=true) { 
        this.userData.push(data)
      }
    }


  }
}
