import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FirstObservableComponent } from './Basic-Observable/first-observable/first-observable.component';
import { SetTimeoutComponent } from './Basic-Observable/set-timeout/set-timeout.component';

import { ErrorAndCompletion1Component } from './Second-Part/error-and-completion1/error-and-completion1.component';
import { ErrorAndCompletion2Component } from './Second-Part/error-and-completion2/error-and-completion2.component';
import { CompleteSignalPart1Component } from './Second-Part/complete-signal-part1/complete-signal-part1.component';
import { CompleteSignalPart2Component } from './Second-Part/complete-signal-part2/complete-signal-part2.component';
import { CreateFunctionComponent } from './ThirdPart/create-function/create-function.component';
import { ErrorObjectComponent } from './ThirdPart/error-object/error-object.component';
import { ErrorObject2Component } from './ThirdPart/error-object2/error-object2.component';
import { OfOperator1Component } from './ThirdPart/Operators/of-operator1/of-operator1.component';
import { FromOperator1Component } from './ThirdPart/Operators/from-operator1/from-operator1.component';
import { FirstExampleComponent } from './FourthPart/UnderStandingOperators/first-example/first-example.component';
import { SecondExampleComponent } from './FourthPart/UnderStandingOperators/second-example/second-example.component';
import { MapOperator1Component } from './FourthPart/Operators/map-operator1/map-operator1.component';
import { FilterOperator1Component } from './FourthPart/Operators/filter-operator1/filter-operator1.component';
import { FilterOperator2Component } from './FourthPart/Operators/filter-operator2/filter-operator2.component';
import { FilterOperator3Component } from './FourthPart/Operators/filter-operator3/filter-operator3.component';
import { IntervalFunctionComponent } from './FifthPart/interval-function/interval-function.component';
import { UnsubscribeComponent } from './FifthPart/unsubscribe/unsubscribe.component';
import { Unsubscribe2Component } from './FifthPart/unsubscribe2/unsubscribe2.component';

const appRoutes:Routes = [
  {path:'First-Observable-example',component:FirstObservableComponent},
  {path:'Set-timeout-Observable-example',component:SetTimeoutComponent},
  {path:'error-and-completion',component:ErrorAndCompletion1Component},
  {path:'error-and-completion-part-2',component:ErrorAndCompletion2Component},
  {path:'complete-signal-part-1',component:CompleteSignalPart1Component},
  {path:'complete-signal-part-2',component:CompleteSignalPart2Component},
  {path:'Create-observable-using-create-function',
  component:CreateFunctionComponent},
  {path:'Create-observable-using-create-function-error-object-example',
  component:ErrorObjectComponent},

  {path:'Create-observable-using-create-function-error-object-example-part-2',
  component:ErrorObject2Component},

  {path:'Create-observable-using-Of-Oprator',
  component:OfOperator1Component},

  {path:'Create-observable-using-from-Oprator',
  component:FromOperator1Component},

  {path:'Fourth-part-example-learning',
  component:FirstExampleComponent},

  {path:'Fourth-part-example-learning-2',
  component:SecondExampleComponent},

  {path:'map-operator-understanding-part-1-example',
  component:MapOperator1Component},

  {path:'filter-operator-understanding-part-1-example',
  component:FilterOperator1Component},

  {path:'filter-operator-understanding-part-2-example',
  component:FilterOperator2Component},

  {path:'filter-operator-understanding-part-3-example',
  component:FilterOperator3Component},

  {path:'interval-function-part-1-example',
  component:IntervalFunctionComponent},

  {path:'unsubscribe-interval-function-part-2-example',
  component:UnsubscribeComponent},

  {path:'unsubscribe-interval-function-part-3-example',
  component:Unsubscribe2Component},


]

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FirstObservableComponent,
    SetTimeoutComponent,
    ErrorAndCompletion1Component,
    ErrorAndCompletion2Component,
    CompleteSignalPart1Component,
    CompleteSignalPart2Component,
    CreateFunctionComponent,
    ErrorObjectComponent,
    ErrorObject2Component,
    OfOperator1Component,
    FromOperator1Component,
    FirstExampleComponent,
    SecondExampleComponent,
    MapOperator1Component,
    FilterOperator1Component,
    FilterOperator2Component,
    FilterOperator3Component,
    IntervalFunctionComponent,
    UnsubscribeComponent,
    Unsubscribe2Component
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
