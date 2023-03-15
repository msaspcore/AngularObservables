import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error-and-completion2',
  templateUrl: './error-and-completion2.component.html',
  styleUrls: ['./error-and-completion2.component.css']
})
export class ErrorAndCompletion2Component implements OnInit {

  constructor() { }

  MyObservable = new Observable((observer)=>{

    setTimeout(() => {observer.next("1")}, 1000);

    setTimeout(() => {observer.next("2")}, 3000);

    setTimeout(() => {
        observer.error(new Error("something Went worng, Please again try later"))
    }, 3000);

    setTimeout(() => {observer.next("3")}, 2000);

    setTimeout(() => {observer.next("4")}, 6000);

  });


  ngOnInit(): void {

    this.MyObservable.subscribe((value)=>{
      console.log(value);
    },(error)=>{
      alert(error.message);
    });
  }

}
