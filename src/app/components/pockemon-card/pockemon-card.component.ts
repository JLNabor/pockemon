import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pockemon-card',
  templateUrl: './pockemon-card.component.html',
  styleUrls: ['./pockemon-card.component.scss']
})
export class PockemonCardComponent implements OnInit, OnChanges {

  public changes:string="";
  public init:string="";
  public cont:number = 0;
  public bindtext:string="hi";

  constructor() { }

  ngOnChanges(){
    this.cont++;
    this.changes = "cambie . . ." + this.cont;
  }

  ngOnInit(): void {
    this.init="arranque";
  }

}
