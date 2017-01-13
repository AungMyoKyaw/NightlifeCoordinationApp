import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchyelpService {

  constructor(private http:Http) { }

  setRecentSearch(text){
    localStorage.setItem('recentSearch',text);
  }

  getRecentsearch(){
    return localStorage.getItem('recentSearch');
  }

  clearRecentsearch(){
    localStorage.setItem('recentSearch','');
  }

  checkIsAuth(){
    return this.http.get('/api/isAuth')
                    .map(res=>res.json());
  }

  addtoGoingList(yelpId:string,yelpInfo){
    let url = `api/add/${yelpId}`;
    let body = {
      yelp:{
        name : yelpInfo.name,
        url : yelpInfo.url,
        image_url : yelpInfo.image_url,
        snippet_text : yelpInfo.snippet_text,
        display_address : yelpInfo.location.display_address,
        phone : yelpInfo.display_phone
      }
    };

    let headers = new Headers({'Content-Type': 'application/json'});
    let reqoptions = new RequestOptions({headers:headers});

    return this.http.post(url,body,reqoptions)
                    .map(res=>res.json());
  }

  getGoingYelpId(){
    let url = `api/goingList?id=1`;
    return this.http.get(url)
                    .map(res=>res.json());
  }

  removeFromGoingList(){

  }

  yelpSearchResult(location:string){
    console.log(location);
    return this.http.get(`/api/yelp?location=${location}`)
                    .map(res=>res.json());
  }
}
