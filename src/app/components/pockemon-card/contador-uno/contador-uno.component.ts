import { Component, OnInit } from '@angular/core';
import { PockemonInfoService } from 'src/app/services/pockemon-info.service';

@Component({
  selector: 'app-contador-uno',
  templateUrl: './contador-uno.component.html',
  styleUrls: ['./contador-uno.component.scss']
})
export class ContadorUnoComponent implements OnInit {

  public contador:number = 0;

  constructor(private clientCont: PockemonInfoService) { }

  ngOnInit(): void {
    this.clientCont.getProfileObs().subscribe(x=> this.contador=x);
  }

  onClick(){
    this.clientCont.setProfileObs(this.contador + 1 );
  }

}
