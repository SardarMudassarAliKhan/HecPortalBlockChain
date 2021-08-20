import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../api.service'

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css']
})

export class DocumentViewerComponent implements OnInit {

  userData: any = ''
  baseUrl: any = 'http://localhost:6060/students/'
  id: any

  constructor(
    private route: ActivatedRoute,
    private API: APIService) { }


  event: boolean = false
  show: boolean = false
  state: boolean = false

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // getting id here need to get data from backend using the id which got here
    await this.getData(this.id)

    if (this.userData == null) {
      this.state = false
    }

    else {
      this.state = true
    }

  }


  async getData(val: any) {
    let url = 'http://localhost:6060/posts/' + val
    // need to call api and get data return it to the html page
    await this.API.apiGetDBData(url).then(res => { (this.userData = res); })
    if (this.userData.result == 'No record Found') {
      this.userData = null
    }

    else {
      this.userData = JSON.parse(this.userData)
    }
  }
}