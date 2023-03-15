import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map,filter } from 'rxjs/operators';


@Component({
  selector: 'app-filter-operator3',
  templateUrl: './filter-operator3.component.html',
  styleUrls: ['./filter-operator3.component.css']
})
export class FilterOperator3Component implements OnInit {

  constructor() { }


  NumbersArray = [1,3,5,7,9]

  FilterObservable = from(this.NumbersArray).pipe(map((val)=>{

    return val * 5;

  }),filter((val)=>{

    return val >=25;

  }));




  ngOnInit(): void {

    this.FilterObservable.subscribe((val) =>{
      console.log(val);

   },(error) => {
    alert(error.message); 

  },()=> {
    alert("Observable has completed emitting all the values");
  });


  }

}
