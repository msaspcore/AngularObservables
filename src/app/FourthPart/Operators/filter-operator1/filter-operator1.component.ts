import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map,filter } from 'rxjs/operators';


@Component({
  selector: 'app-filter-operator1',
  templateUrl: './filter-operator1.component.html',
  styleUrls: ['./filter-operator1.component.css']
})
export class FilterOperator1Component implements OnInit {

  constructor() { }

  NumbersArray = [1,3,5,7,9]

  FilterObservable = from(this.NumbersArray);

  transformObservable = this.FilterObservable.pipe(map((val)=>{
    return val * 5;
  }));

  filteredObservable = this.transformObservable.pipe(filter((val)=>{
    return val >= 35;
 }))




  ngOnInit(): void {

    this.filteredObservable.subscribe((val) =>{
      console.log(val);

   },(error) => {
    alert(error.message); 

  },()=> {
    alert("Observable has completed emitting all the values");
  });


  }

}
