import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';


@Component({
  selector: 'app-degrees-in-pending',
  templateUrl: './degrees-in-pending.component.html',
  styleUrls: ['./degrees-in-pending.component.css']
})
export class DegreesInPendingComponent implements OnInit {

  title = 'datatables';
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
      if (data.status != true) {
        this.userData.push(data)
      }
    }

  }


}
