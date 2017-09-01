/**
 * Created by hsj on 2017/8/29  0029.
 */
import { Component, OnInit } from '@angular/core';
// import {greet, render} from './home.component.d';

function createGreeting() {
  console.log('测试一下JavaScript方式，因为说是超集。function--->createGreeting');
}
// greet(function () {
//   return {
//     greeting: 'string',
//     duration: 123456,
//     color: 'string'
//   };
// });
// render(function () {
//   alert('finish.');
// });

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public obj: object = {
  h : 'h',
  s : 's',
  j : 'j'
 };
  public foo: Number = 123456;
  ngOnInit() {
    createGreeting();
    console.log(this.obj);
    console.log(this.foo);
  }
}

