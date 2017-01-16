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
  loading:boolean = true;
  deleting:boolean = false;
  deletingId:string = '';
  errorMessage:string = '';

  constructor(private mygoinglistservice:MygoinglistService) { }

  getgoinglist(){
    this.loading = true;
    this.mygoinglistservice.getmygoinglist()
                           .subscribe((result)=>{
                             if(result.length){
                              this.goinglist = result;
                              this.loading = false;
                             } else {
                              this.loading = false;
                              this.errorMessage = 'No Going List For This User';
                              this.goinglist = [];
                             }
                           },
                           (error)=>{
                             this.errorMessage = error;
                             this.loading = false;
                           });
  }

  deleteFromGoingList(actiId:string){
    // console.log(actiId);
    this.deleting = true;
    this.deletingId = actiId;
    this.mygoinglistservice.removefromgoinglist(actiId)
                           .subscribe((result)=>{
                             this.getgoinglist();
                             this.deleting = false;
                             this.deletingId = '';
                           },
                           (error)=>{
                             this.errorMessage = error;
                             this.deletingId = '';
                           });
  }

  ngOnInit() {
    this.getgoinglist();
  }

}
