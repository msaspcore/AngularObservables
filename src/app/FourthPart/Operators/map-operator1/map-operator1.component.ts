import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator1',
  templateUrl: './map-operator1.component.html',
  styleUrls: ['./map-operator1.component.css']
})
export class MapOperator1Component implements OnInit {

  constructor() { }

  NumbersArray = [2,4,6,8,10]

  FromOperatorObservable = from(this.NumbersArray);

  transformObservable = this.FromOperatorObservable.pipe(map((value)=>{
    return value * 5;
  }))

  ngOnInit(): void {

    this.transformObservable.subscribe((value)=>{
      console.log(value);
    },(error)=>{
      alert(error.message);
    },()=>alert("Observable emitted the values"));

  }

}
