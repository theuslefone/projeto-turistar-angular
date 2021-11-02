import { CarnavalService } from '../../../shared/service/carnaval.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carnaval-list',
  templateUrl: './carnaval-list.component.html',
  styleUrls: ['./carnaval-list.component.css']
})
export class CarnavalListComponent implements OnInit {

  agremiacoes: any;

  constructor(
    public carnavalService: CarnavalService
  ) { }

  ngOnInit(): void {
    this.getAgremiacoes();
  }

  getAgremiacoes(){
    this.carnavalService.getAgremiacoes().subscribe(data =>{
      this.agremiacoes = data
      console.log(this.agremiacoes)
    })
  }
}
