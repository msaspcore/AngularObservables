import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval-function',
  templateUrl: './interval-function.component.html',
  styleUrls: ['./interval-function.component.css']
})
export class IntervalFunctionComponent implements OnInit {

  constructor() { }


  counterObservable = interval(1000);

  ngOnInit(): void {

    this.counterObservable.subscribe((val)=>{
      console.log(val);
    });

  }

}
