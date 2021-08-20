import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-search-pending',
  templateUrl: './search-pending.component.html',
  styleUrls: ['./search-pending.component.css']
})
export class SearchPendingComponent implements OnInit {

  userData:any = ''
  baseUrl:any = 'http://localhost:6060/students/'
  id:any
  
  constructor(
    private route: ActivatedRoute,
    private API:APIService) {}

    
    event :boolean = false
    show :boolean = false
    state :boolean = false

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // getting id here need to get data from backend using the id which got here
    this.getData(this.id)
  
  }


  async getData(val:any){
    let url = this.baseUrl+ val
    // console.log(url, val)
    // need to call api and get data return it to the html page
    await this.API.apiGetDBData(url).then(res => {(this.userData=res);})
  }


  async approve(){
    let url ='http://localhost:6060/posts'
    this.userData.status = true
    this.userData.verify_on = new Date()
    console.log(url, this.userData, this.baseUrl)
    this.API.apiUpdateData(this.baseUrl+this.userData.cnic, this.userData)
    await this.API.apiPostData(url, this.userData)
  }


}
