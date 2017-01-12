import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
    return this.http.get('http://127.0.0.1:4444/api/isAuth')
                    .map(res=>res.json());
  }

  yelpSearchResult(location:string){
    console.log(location);
    return this.http.get(`http://127.0.0.1:4444/api/yelp?location=${location}`)
                    .map(res=>res.json());
  }
}
