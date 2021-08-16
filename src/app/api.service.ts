import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class APIService {
  output: any = '';
  constructor(private http: HttpClient) { }
  list = []
  async apiGetData(url: any) {
    try {
      await this.http.get<any>(url).toPromise().then(res => {
        // console.log(JSON.parse(res).cnic,'from service')
        this.output = JSON.parse(res);
      });
      return this.output
    }
    catch {
      this.output = "No record Found"
      return this.output
    }
  }


  async apiGetDBData(url: any) {
    try {
      await this.http.get<any>(url).toPromise().then(res => {
        this.output = res
      });
      return this.output
    }
    catch {
      this.output = "No record Found"
      return this.output
    }
  }



  apiPostData(url: any, body: any) {
    // console.log(url, body, 'from api service');
    //const headers = {'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT' };
    return this.http.post(url, body).subscribe(data => { });
  }

  apiUpdateData(url: any, body: any) {
    // console.log(url, body, 'from api service');
    //const headers = {'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT' };
    return this.http.put(url, body).subscribe(data => { });
  }



}

