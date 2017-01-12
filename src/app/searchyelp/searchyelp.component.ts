import { Component, OnInit } from '@angular/core';
import { SearchyelpService } from '../searchyelp.service';
import { RecentsearchService } from '../recentsearch.service';

@Component({
  moduleId: 'module.id',
  selector: 'app-searchyelp',
  templateUrl: './searchyelp.component.html',
  styleUrls: ['./searchyelp.component.css']
})
export class SearchyelpComponent implements OnInit {
  placeList: any = [];
  recentSearch: string;
  sVal: string = '';
  loading: boolean = false;

  constructor(private searchyelpService:SearchyelpService) { }

  getSearchResult(){
    this.searchyelpService.yelpSearchResult(this.recentSearch)
              .subscribe(placelist => {
                console.log(placelist);
                this.placeList = placelist.businesses;
                this.loading = false;
              });
  }

  onEnter(searchVal:string){
    this.searchyelpService.setRecentSearch(searchVal);
    this.recentSearch = searchVal;
    this.sVal = searchVal;
    this.placeList = [];
    this.loading = true;
    this.getSearchResult();
    // this.searchyelpService.clearRecentsearch();
  }

  ngOnInit() {
    this.recentSearch = this.searchyelpService.getRecentsearch();
    if(this.recentSearch!==''){
      console.log(this.recentSearch,'searching now');
      this.loading = true;
      this.getSearchResult();
      this.sVal = this.recentSearch;
    }
  }
}
