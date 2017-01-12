import { Component, OnInit } from '@angular/core';
import { MygoinglistService } from '../mygoinglist.service';

@Component({
  moduleId:'module.id',
  selector: 'app-mygoinglist',
  templateUrl: './mygoinglist.component.html',
  styleUrls: ['./mygoinglist.component.css'],
  providers: [MygoinglistService]
})
export class MygoinglistComponent implements OnInit {
  goinglist:any = [];

  constructor(private mygoinglistservice:MygoinglistService) { }

  getgoinglist(){
    this.mygoinglistservice.getmygoinglist()
                           .subscribe((result)=>{
                             this.goinglist = result;
                             console.log(this.goinglist);
                           });
  }

  deleteFromGoingList(actiId:string){
    console.log(actiId);
    this.mygoinglistservice.removefromgoinglist(actiId)
                           .subscribe((result)=>{
                             this.getgoinglist();
                           });
  }

  ngOnInit() {
    this.getgoinglist();
  }

}
