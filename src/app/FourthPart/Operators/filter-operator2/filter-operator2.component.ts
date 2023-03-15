import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map,filter } from 'rxjs/operators';


@Component({
  selector: 'app-filter-operator2',
  templateUrl: './filter-operator2.component.html',
  styleUrls: ['./filter-operator2.component.css']
})
export class FilterOperator2Component implements OnInit {

  constructor() { }

  NumbersArray = [1,3,5,7,9]

  FilterObservable = from(this.NumbersArray);

  transformObservable = this.FilterObservable.pipe(map((val)=>{

      return val * 5;

  }),filter((val)=>{

      return val>=25;

  }))


  ngOnInit(): void {

    this.transformObservable.subscribe((val) =>{
      console.log(val);

   },(error) => {
    alert(error.message); 

  },()=> {
    alert("Observable has completed emitting all the values");
  });


  }

}
