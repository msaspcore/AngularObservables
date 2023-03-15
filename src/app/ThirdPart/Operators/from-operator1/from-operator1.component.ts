import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator1',
  templateUrl: './from-operator1.component.html',
  styleUrls: ['./from-operator1.component.css']
})
export class FromOperator1Component implements OnInit {

  constructor() { }

  MyFamilyMembersArray = ["Manvit","Padmavathamma","Maanya","Subhashini","Gangappa","Madhu"]

  FromOperatorObservable = from(this.MyFamilyMembersArray);


  ngOnInit(): void {

    this.FromOperatorObservable.subscribe((value)=>{
      console.log(value);
    },(error)=>{
      alert(error.message);
    },()=>{
      alert("Observer emitted all the data");
    });

  }

}
