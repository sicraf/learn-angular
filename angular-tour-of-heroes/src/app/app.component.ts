import { Component } from '@angular/core';
import { Hero } from './hero';


const HEROES: Hero[] = [
  { id: 11, name: '影流之镰 凯隐' },
  { id: 12, name: '逆羽 霞' },
  { id: 13, name: '幻翎	洛' },
  { id: 14, name: '青钢影 卡蜜尔' },
  { id: 15, name: '翠神	艾翁' },
  { id: 16, name: '暴怒骑士	克烈' },
  { id: 17, name: '岩雀	塔莉垭' },
  { id: 18, name: '铸星龙王	奥瑞利安·索尔' },
  { id: 19, name: '戏命师	烬' },
  { id: 20, name: '海兽祭司	俄洛伊' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>我的英雄</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
      transition: left .1s;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent  { 
  title = '英雄之旅';
  selectedHero : Hero;
  heroes = HEROES;
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
 }
