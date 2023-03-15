import { Component, OnInit } from '@angular/core';
import { Observable ,from} from 'rxjs';

@Component({
  selector: 'app-first-example',
  templateUrl: './first-example.component.html',
  styleUrls: ['./first-example.component.css']
})
export class FirstExampleComponent implements OnInit {

  constructor() { }

  MyFamilyMembersArray = ["Manvit","Maanya","Gangappa","Padmavathamm","Subhashini"]

FromOperatorObservable = from(this.MyFamilyMembersArray);




  ngOnInit(): void {

    this.FromOperatorObservable.subscribe((val) =>{
      console.log(val);

   },(error) => {
    alert(error.message); 

  },()=> {
    alert("Observable has completed emitting all the values");
  });

  }

}
