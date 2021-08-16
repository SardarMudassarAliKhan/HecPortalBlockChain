import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {


  @Input() userData:any
  constructor(private API: APIService) { }

  ngOnInit(): void {
  }

  baseUrl = 'http://localhost:6060/'

  getData(data: any){

    this.userData.cgpa = data.cgpa
    this.userData.remarks = data.remarks
    this.sendData(this.userData)
    

  }

  sendData(data:any){
    let url = this.baseUrl+ 'students/'+ this.userData.cnic
    this.API.apiUpdateData(url, this.userData)
    // need to get received data to db as put or update!
  }

  approve(data:any){
    if (data.to_verify == 'yes' && data.cgpa != 0 ){
      let url = this.baseUrl+ 'students/'+ this.userData.cnic

      this.userData.to_verify = true
      this.API.apiUpdateData(url, this.userData)
    }
    else {
      console.log(data.to_verify)
    }
  }


}
