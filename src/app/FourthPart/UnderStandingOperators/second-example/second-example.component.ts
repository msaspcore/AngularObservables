import { Component, OnInit } from '@angular/core';
import { Observable,from } from 'rxjs';

@Component({
  selector: 'app-second-example',
  templateUrl: './second-example.component.html',
  styleUrls: ['./second-example.component.css']
})
export class SecondExampleComponent implements OnInit {

  constructor() { }

  NumberArray = [2,4,6,8,10]

  FromOperatorObservable = from(this.NumberArray);


  ngOnInit(): void {
    this.FromOperatorObservable.subscribe((val) =>{
      console.log(val);

   },(error) => {
    alert(error.message); 

  },()=> {
    alert("Observable has completed emitting all the values");
  });

  }

}
