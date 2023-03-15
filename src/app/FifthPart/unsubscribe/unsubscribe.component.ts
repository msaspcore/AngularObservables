import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  constructor() { }

  counterObservable = interval(1000);

  counterSubscribe:any;


  ngOnInit(): void {

    this.counterSubscribe = this.counterObservable.subscribe((value)=>{  
      console.log(value);
    })

  }


  Unsub()
  {
    this.counterSubscribe.unsubscribe();
  }


}
