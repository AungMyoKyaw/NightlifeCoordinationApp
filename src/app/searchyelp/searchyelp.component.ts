import { Component, OnInit } from '@angular/core';
import { SearchyelpService } from '../searchyelp.service';

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
  isAuth: boolean = false;
  yelpGoingId:any = [];
  nowYelpGoingId:string = '';
  errorMessage:string = '';

  constructor(private searchyelpService:SearchyelpService) { }

  getSearchResult(){
    this.loading = true;
    this.errorMessage = '';
    this.searchyelpService.yelpSearchResult(this.recentSearch)
              .subscribe((placelist) => {
                console.log(placelist);
                this.placeList = placelist.businesses;
                this.loading = false;
                this.errorMessage = '';
              },
              (error)=>{
                this.errorMessage = error;
                this.loading = false;
              });
  }

  addtoGoingList(yelpId:string,yelpInfo){
    this.nowYelpGoingId = yelpId;
    this.searchyelpService.addtoGoingList(yelpId,yelpInfo)
                          .subscribe(goinglist=>{
                            this.yelpGoingId.push(Object.keys(goinglist)[0]);
                            this.nowYelpGoingId = '';
                            this.errorMessage = '';
                          },
                          error=>{
                            this.errorMessage=error;
                            this.nowYelpGoingId = '';
                          });
  }

  getGoingYelpId(){
    this.searchyelpService.getGoingYelpId()
                          .subscribe(idList=>{
                            this.yelpGoingId = idList;
                            this.errorMessage = '';
                          },
                          (error)=>{
                            this.errorMessage = error;
                          })
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
    this.searchyelpService.checkIsAuth()
                          .subscribe(auth=>{
                            this.isAuth = auth.isAuth;
                            if(this.isAuth){
                              this.getGoingYelpId();
                            }
                            console.log(this.isAuth,'is auth');
                          });
    if(this.recentSearch!==null){
      console.log(this.recentSearch,'searching now');
      this.loading = true;
      this.getSearchResult();
      this.sVal = this.recentSearch;
    }
  }
}
