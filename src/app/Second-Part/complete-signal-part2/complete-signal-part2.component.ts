import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-complete-signal-part2',
  templateUrl: './complete-signal-part2.component.html',
  styleUrls: ['./complete-signal-part2.component.css']
})
export class CompleteSignalPart2Component implements OnInit {

  constructor() { }

  MyObservable = new Observable((observer)=>{

    setTimeout(() => {observer.next("1")}, 1000);    

    setTimeout(() => {observer.next("2")}, 3000);

    setTimeout(() => { observer.next("3") }, 2000);

    setTimeout(() => { observer.next("4") }, 6000);
    setTimeout(() => {observer.next("5")}, 4000);
    setTimeout(() => {observer.complete()}, 4000);

  });



  ngOnInit(): void {

    this.MyObservable.subscribe((value)=>{
      console.log(value);
    },(error)=>{
      alert(error.message);
    },()=>{
      alert("Observable has completed emitting all the values");
    });

  }

}
