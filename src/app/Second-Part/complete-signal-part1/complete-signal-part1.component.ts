import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-complete-signal-part1',
  templateUrl: './complete-signal-part1.component.html',
  styleUrls: ['./complete-signal-part1.component.css']
})
export class CompleteSignalPart1Component implements OnInit {

  constructor() { }


  MyObservable = new Observable((observer)=>{

    setTimeout(() => {observer.next("1")}, 1000);    

    setTimeout(() => {observer.next("2")}, 3000);

    setTimeout(() => { observer.next("3") }, 2000);

    setTimeout(() => { observer.next("4") }, 6000);
    setTimeout(() => {observer.next("5")}, 4000);
    setTimeout(() => {observer.complete()}, 7000);


  });


  ngOnInit(): void {

    this.MyObservable.subscribe((val) =>{
      console.log(val);
 },(error) => {
   alert(error.message); 
},()=> {
  alert("Observable has completed emitting all the values");
}
);


  }

}
