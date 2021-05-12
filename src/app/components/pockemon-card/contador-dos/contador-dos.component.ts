import { Component, OnInit } from '@angular/core';
import { PockemonInfoService } from 'src/app/services/pockemon-info.service';

@Component({
  selector: 'app-contador-dos',
  templateUrl: './contador-dos.component.html',
  styleUrls: ['./contador-dos.component.scss']
})
export class ContadorDosComponent implements OnInit {

  public contador:number = 0;

  constructor(private clientCont: PockemonInfoService) { }

  ngOnInit(): void {
    this.clientCont.getProfileObs().subscribe(x=> this.contador=x);
  }

  onClick(){
    this.clientCont.setProfileObs(this.contador - 1 );
  }
}
