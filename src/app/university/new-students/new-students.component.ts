import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.css']
})
export class NewStudentsComponent implements OnInit {

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
      if (data.cgpa=="0") { 
        this.userData.push(data)
      }
    }


  }

}
