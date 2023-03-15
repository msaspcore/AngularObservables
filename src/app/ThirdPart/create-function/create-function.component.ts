import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-create-function',
  templateUrl: './create-function.component.html',
  styleUrls: ['./create-function.component.css']
})
export class CreateFunctionComponent implements OnInit {

  constructor() { }

  MycreteObservable = Observable.create((observer:any)=>{
    setTimeout(() => {observer.next("Manvit")}, 1000);
    setTimeout(() => {observer.next("Madhusudhan")}, 3000);
    setTimeout(() => {observer.next("Padmvathamma")}, 5000);
    setTimeout(() => {observer.next("Gangappa Naidu")}, 2000);
    setTimeout(() => {observer.next("Maanya")}, 4000);

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

