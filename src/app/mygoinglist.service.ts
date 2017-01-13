import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class MygoinglistService {

  constructor(private http:Http) { }

  getmygoinglist(){
    return this.http.get(`api/goinglist`)
                    .map(res=>res.json());
  }

  removefromgoinglist(listid:string){
    let url = `api/delete/${listid}`;
    let body = JSON.stringify({});

    let headers = new Headers({'Content-Type': 'application/json'});
    let reqOptions = new RequestOptions({headers:headers});

    return this.http.post(url,body,reqOptions)
                    .map(res=>res.json());

  }
}
