import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-unsubscribe2',
  templateUrl: './unsubscribe2.component.html',
  styleUrls: ['./unsubscribe2.component.css']
})
export class Unsubscribe2Component implements OnInit {

  constructor() { }

  counterObservable = interval(1000);

  counterSubscribe:any;


  ngOnInit(): void {
  }

  Unsub()
  {
    this.counterSubscribe.unsubscribe();
  }

  Sub()
  {
    this.counterSubscribe = this.counterObservable.subscribe((value)=>{  
      console.log(value);
    })
  }


}
