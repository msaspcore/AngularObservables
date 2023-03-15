import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-timeout',
  templateUrl: './set-timeout.component.html',
  styleUrls: ['./set-timeout.component.css']
})
export class SetTimeoutComponent implements OnInit {

  constructor() { }

  MyObservable = new Observable((observer)=>{
    console.log("Observable starts");

    setTimeout(() => {observer.next("Manvit") }, 1000);

    setTimeout(() => { observer.next("Gangappa")
      
    }, 4000);


    setTimeout(() => { observer.next("Maanya")
      
    }, 3000);


   setTimeout(() => {observer.next("Padmavathamma")}, 2000);
   setTimeout(() => {observer.next("Madhu")}, 5000);

  });

  ngOnInit(): void {

    this.MyObservable.subscribe((val)=>{
      console.log(val);
    })

  }

}
