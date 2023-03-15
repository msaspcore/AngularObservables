import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { of,Observable } from 'rxjs';

@Component({
  selector: 'app-of-operator1',
  templateUrl: './of-operator1.component.html',
  styleUrls: ['./of-operator1.component.css']
})
export class OfOperator1Component implements OnInit {

  constructor() { }

MobileNumbersArray = [9515341111,9347299074,91105951,9676579808];

NamesArray = ["Manvit","Padmavathamma","Maanya","Subhashini","Gangappa","Madhu"]

ObservableByOf = of(this.MobileNumbersArray, this.NamesArray);



  ngOnInit(): void {

    this.ObservableByOf.subscribe((value)=>{
      console.log(value);
    },(error)=>{
      alert(error.message);
    },()=>alert("Observable has emitted all the values"));

  }

}
