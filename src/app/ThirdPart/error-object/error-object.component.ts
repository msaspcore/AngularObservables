import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error-object',
  templateUrl: './error-object.component.html',
  styleUrls: ['./error-object.component.css']
})
export class ErrorObjectComponent implements OnInit {

  constructor() { }

  MycreteObservable = Observable.create((observer:any)=>{
    setTimeout(() => {observer.next("Manvit")}, 1000);
    setTimeout(() => {observer.next("Madhusudhan")}, 3000);
    setTimeout(() => {observer.next("Padmvathamma")}, 5000);
    setTimeout(() => {observer.next("Gangappa Naidu")}, 2000);
    setTimeout(() => {observer.next("Maanya")}, 4000);

    setTimeout(() => {
        observer.error(new Error("Something went wrong.... pls try later!!!"));
        
    }, 3000);

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
