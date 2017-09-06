/**
 * Created by hsj on 2017/8/29  0029.
 */
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PageState } from '../../core/pagination.component';

function createGreeting() {
  console.log('测试一下JavaScript方式，因为说是超集。function--->createGreeting');
}

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
  public title = 'Tour of Heroes';
  public myHero = 'Windstorm';
  public heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  public params = {recordCount: 80, pageSize: 10, shownPageCountMax: 10, startPageNo: 1, lang: 'chn'}
  ngOnInit() {
    createGreeting();
    console.log(this.obj);
    console.log(this.foo);
    console.log($('#testjq'));
  }
  public onPageChanged(state: PageState): void {
    const count = state.pageCount;
    const pageNo = state.pageNo;
    const pageSize = state.pageSize;
    console.log('count:' + count + ' pageNo:' + pageNo + ' pageSize:' + pageSize);
  }

}

