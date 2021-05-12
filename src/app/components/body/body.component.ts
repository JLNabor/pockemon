import { Component, OnInit } from '@angular/core';
import { BackendServicesService } from 'src/app/services/backend-services.service';
import { Pockemon } from 'src/app/shared/Pockemon';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  pockemonList: Array<Pockemon>=[];

  constructor(private backend:BackendServicesService) {
   }

  ngOnInit(): void {
    this.getPockemonList();
  }

  getPockemonList(){
    this.backend.getPockemon().subscribe(
      x=> {this.pockemonList = x}
    );
  }

}
