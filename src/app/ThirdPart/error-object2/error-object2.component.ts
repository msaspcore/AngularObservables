import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error-object2',
  templateUrl: './error-object2.component.html',
  styleUrls: ['./error-object2.component.css']
})
export class ErrorObject2Component implements OnInit {

  constructor() { }


  MycreteObservable = Observable.create((observer:any)=>{
    setTimeout(() => {observer.next("Manvit")}, 1000);
    setTimeout(() => {observer.next("Madhusudhan")}, 3000);
    setTimeout(() => {observer.next("Padmvathamma")}, 5000);
    setTimeout(() => {observer.next("Gangappa Naidu")}, 2000);
    setTimeout(() => {observer.next("Maanya")}, 4000);

    setTimeout(() => {observer.complete()}, 3000);

  });


  ngOnInit(): void {

    this.MycreteObservable.subscribe((value:any)=>{
      console.log(value);
    },(error:any)=>{
      alert(error.message)
    },()=>{
      alert("Observable has completed emmitting all the values");
    });


  }

}
