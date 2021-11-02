import { Component, OnInit } from '@angular/core';
import { BaresService } from 'src/app/shared/service/bares.service';

@Component({
  selector: 'app-bares-list',
  templateUrl: './bares-list.component.html',
  styleUrls: ['./bares-list.component.css']
})
export class BaresListComponent implements OnInit {

  bares: any;

  constructor(
    public BarService: BaresService
  ) { }

  ngOnInit(): void {
    this.getBares()
  }

  getBares(){
    this.BarService.getBares().subscribe(data =>{
      this.bares = data
      console.log(this.bares)
      console.log('bares')
    })
  }
}
