import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first-observable',
  templateUrl: './first-observable.component.html',
  styleUrls: ['./first-observable.component.css']
})
export class FirstObservableComponent implements OnInit {

  constructor() { }

  MyObservable = new Observable((observer)=>{
    console.log("Observable starts");

    observer.next("Manvit");
    observer.next("Gangappa");
    observer.next("Maanya");
    observer.next("Padmavathamma");
    observer.next("Madhu");
  });

  ngOnInit(): void {

    this.MyObservable.subscribe((val)=>{
      console.log(val);
    })

  }

}
